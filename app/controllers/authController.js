import UsuarioRepository from "../repositories/UsuarioRepository.js";
import bcrypt from 'bcryptjs';
import  signJWT  from '../helpers/jwt/signJWT.js';
import jwtValidate from '../helpers/jwt/jwtValidate.js';

class AuthController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database);
  }

  async login(req, res) {
    try{
      const { ra, senha } = req.body;

      if (!ra || !senha) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      await this.UsuarioRepository.search({ ra })
        .then(async (data) => {
          if (data.length === 0) {
            return res.status(404).json({ status: false, message: "Usuário não encontrado!" });
          }

          const usuario = data[0];

          const isMatch = await bcrypt.compare(senha, usuario.senha);

          if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais Incorretas!' });
          }

          const payload = {userId: usuario.id, tipo: usuario.tipo, nome: usuario.nome};
          const token = signJWT(payload);

          return res.status(200).json({ status: true, data: { usuario, token }, message: 'Usuário Logado!' });
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: error.message, stack: error.stack });
    }
  }

  async logout(req, res) {
    return res.json({ status: true, token: null });
  }

  async checkAuth(req, res) {
    try{
      const token = req.headers['authorization'];

      if (!token) return res.status(401).json({ status: false, message: 'Token não Encontrado!' });

      const validate = jwtValidate(token);

      if(!validate.error){
        return res.status(200).json({ status: true, message: "Usuário Autenticado!", userId: validate.decoded.userId, tipo: validate.decoded.tipo, nome: validate.decoded.nome });
      }

      switch(validate.error.name){
        case 'TokenExpiredError': return res.status(403).json({ status: false, message: "Token Expirado!" });
        case 'JsonWebTokenError': return res.status(403).json({ status: false, message: "Token Inválido!" });
        default: return res.status(403).json({ status: false, message: "Usuário não Autenticado!" });
      }
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: error.message, stack: error.stack });
    }
  }
}


export default AuthController;
import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class AuthController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database.getConnection());
  }

  async login(req, res) {
    try{
      this.UsuarioRepository.login(req.body.email, req.body.password)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
    catch(e){
      console.error(error);
      return res.status(500).json({ status: false, message: error.message });
    }
  }

  async logout(req, res) {
    try{
      this.UsuarioRepository.logout(req.headers.authorization)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
    catch(e){
      console.error(error);
      return res.status(500).json({ status: false, message: error.message });
    }
  }

  async checkAuth(req, res) {
    try{
      this.UsuarioRepository.getUserState(req.headers.authorization)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
    catch(e){
      console.error(error);
      return res.status(500).json({ status: false, message: error.message });
    }
  }
}


export default AuthController;
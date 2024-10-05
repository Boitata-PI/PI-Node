import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database.getConnection());
  }

  async register(req, res) {
    try {
      const { nome, senha, ra } = req.body;

      if (!nome || !ra || !senha) {
        return res.status(400).json({ message: "Dados Incompletos!" });
      }

      const user = new Usuario(nome, senha, ra);

      this.UsuarioRepository.register(user)
        .then((userData) => {
          res.json({status: true, data: userData});
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Usuario: ${error.message}` });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      this.UsuarioRepository.login(email, password)
        .then((data) => {
          res.json(data)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    } catch (error) {
      res.redirect("/index.php/user/login");
    }
  }

  async logout(req, res) {
    try{
      this.UsuarioRepository.logout()
      .then(() => {
        res.redirect("/index.php/user/login");
      })
    }
    catch(error){
      return res.status(500).json({ status: false, message: `Erro ao deslogar: ${error.message}` });
    }
  }

  home(req, res){
    return res.redirect("/index.php/clients/home")
  }
}


export default UsuarioController;
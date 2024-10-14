import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class ProfessorController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database.getConnection());
  }


  async store(req, res) {
    try {
      const { nome, ra, senha } = req.body;
      const tipo = "PROFESSOR";

      if (!nome || !ra || !senha || !tipo) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      const user = new Usuario({nome, ra, senha, tipo});

      const result = await this.UsuarioRepository.create(user);

      if (!result) {
        throw new Error("Professor não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Professor Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao registrar Usuario: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const Professor = await this.UsuarioRepository.find(id);

      if(!Professor){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      const professor = new Usuario(Professor.get());
      professor.updateAttributes(req.body);

      const result = await this.UsuarioRepository.update(professor);

      if(!result){
        throw new Error("Professor não Atualizado!");
      }

      return res.status(200).json({ status: true, data: professor, message: 'Professor Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.json({ status: false, message: `Erro ao atualizar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.UsuarioRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'Professor Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao listar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const result = await this.UsuarioRepository.find(id);

      if(!result){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Professor: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const result = await this.UsuarioRepository.search(req.body);

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var Professor = await this.UsuarioRepository.find(id);
      
      if(!Professor){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      const professor = new Usuario(Professor.get()); 

      const result = await this.UsuarioRepository.delete(professor);

      return res.status(200).json({ status: true, data: professor, message: 'Professor Deletado!' });
    }
    catch (error) {
      return res.json({ status: false, message: `Erro ao deletar Professor: ${error.message}`, stack: error.stack });
    }
  }
}


export default ProfessorController;
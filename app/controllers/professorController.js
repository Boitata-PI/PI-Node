import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class ProfessorController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database);
  }


  async store(req, res) {
    try {
      const { nome, ra, senha } = req.body;
      const tipo = "PROFESSOR";

      if (!nome || !ra || !senha || !tipo) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      const professor = new Usuario({nome, ra, senha, tipo});

      const result = await this.UsuarioRepository.create(professor);

      if (!result) {
        throw new Error("Professor não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Professor Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Usuario: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const professorSequelize = await this.UsuarioRepository.find(id);

      if(!professorSequelize){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      const professor = new Usuario(professorSequelize.get());
      professor.updateAttributes(req.body);

      const result = await this.UsuarioRepository.update(professor);

      if(!result){
        throw new Error("Professor não Atualizado!");
      }

      return res.status(200).json({ status: true, data: professor, message: 'Professor Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.UsuarioRepository.list('PROFESSOR');

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Professores Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const professorSequelize = await this.UsuarioRepository.find(id, 'PROFESSOR');

      if(!professorSequelize){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      return res.status(200).json({ status: true, data: professorSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Professor: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.UsuarioRepository.search(req.body, 'PROFESSOR');

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Professor: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var professorSequelize = await this.UsuarioRepository.find(id, 'PROFESSOR');
      
      if(!professorSequelize){
        return res.status(404).json({ status: false, message: "Professor não encontrado!" });
      }

      const professor = new Usuario(professorSequelize.get()); 

      const result = await this.UsuarioRepository.delete(professor);

      if(!result){
        throw new Error("Professor não Deletado!");
      }

      return res.status(200).json({ status: true, data: professor, message: 'Professor Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Professor: ${error.message}`, stack: error.stack });
    }
  }
}


export default ProfessorController;
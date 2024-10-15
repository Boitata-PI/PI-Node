import Curso from "../models/Curso.js";
import CursoRepository from "../repositories/CursoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class CursoController {
  constructor(database) {
      this.CursoRepository = new CursoRepository(database);
      this.UsuarioRepository = new UsuarioRepository(database);
  }


  async store(req, res) {
    try {
      const { nome, codCord } = req.body;

      if (!nome || !codCord ) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codCord){
        if(!await this.UsuarioRepository.find(codCord, 'PROFESSOR')){
          return res.status(404).json({ status: false, message: "Professor não encontrado!" });
        }
      }

      const curso = new Curso({nome, codCord});

      const result = await this.CursoRepository.create(curso);

      if (!result) {
        throw new Error("Curso não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Curso Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Curso: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codCord } = req.body;
      const cursoSequelize = await this.CursoRepository.find(id);

      if(!cursoSequelize){
        return res.status(404).json({ status: false, message: "Curso não encontrado!" });
      }

      if(codCord){
        if(!await this.UsuarioRepository.find(codProf, 'PROFESSOR')){
          return res.status(404).json({ status: false, message: "Professor não encontrado!" });
        }
      }

      const curso = new Curso(cursoSequelize.get());
      curso.updateAttributes(req.body);

      const result = await this.CursoRepository.update(curso);

      if(!result){
        throw new Error("Curso não Atualizado!");
      }

      return res.status(200).json({ status: true, data: curso, message: 'Curso Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar Curso: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.CursoRepository.list();

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Curso Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar Curso: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const resultSequelize = await this.CursoRepository.find(id);

      if(!resultSequelize){
        return res.status(404).json({ status: false, message: "Curso não encontrado!" });
      }

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Curso: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.CursoRepository.search(req.body);

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Curso: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var cursoSequelize = await this.CursoRepository.find(id);
      
      if(!cursoSequelize){
        return res.status(404).json({ status: false, message: "Curso não encontrado!" });
      }

      const curso = new Curso(cursoSequelize.get()); 

      const result = await this.CursoRepository.delete(curso);

      if(!result){
        throw new Error("Curso não Deletado!");
      }

      return res.status(200).json({ status: true, data: curso, message: 'Curso Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Curso: ${error.message}`, stack: error.stack });
    }
  }
}


export default CursoController;
import Disciplina from "../models/Disciplina.js";
import DisciplinaRepository from "../repositories/DisciplinaRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import CursoRepository from "../repositories/CursoRepository.js";


class DisciplinaController {
  constructor(database) {
      this.DisciplinaRepository = new DisciplinaRepository(database);
      this.UsuarioRepository = new UsuarioRepository(database);
      this.CursoRepository = new CursoRepository(database);
  }


  async store(req, res) {
    try {
      const { nome, codProf, codCurso } = req.body;

      if (!nome || !codProf || !codCurso) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codProf){
        if(!await this.UsuarioRepository.find(codProf, 'PROFESSOR')){
          return res.status(404).json({ status: false, message: "Professor não encontrado!" });
        }
      }

      if(codCurso){
        if(!await this.CursoRepository.find(codCurso)){
          return res.status(404).json({ status: false, message: "Curso não encontrado!" });
        }
      }

      const disciplina = new Disciplina({nome, codProf, codCurso});

      const result = await this.DisciplinaRepository.create(disciplina);

      if (!result) {
        throw new Error("Disciplina não Cadastrada!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Disciplina Cadastrada!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao registrar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codProf, codCurso } = req.body;
      const disciplinaSequelize = await this.DisciplinaRepository.find(id);

      if(!disciplinaSequelize){
        return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
      }

      if(codProf){
        if(!await this.UsuarioRepository.find(codProf, 'PROFESSOR')){
          return res.status(404).json({ status: false, message: "Professor não encontrado!" });
        }
      }

      if(codCurso){
        if(!await this.CursoRepository.find(codCurso)){
          return res.status(404).json({ status: false, message: "Curso não encontrado!" });
        }
      }

      const disciplina = new Disciplina(disciplinaSequelize.get());
      disciplina.updateAttributes(req.body);

      const result = await this.DisciplinaRepository.update(disciplina);

      if(!result){
        throw new Error("Disciplina não Atualizada!");
      }

      return res.status(200).json({ status: true, data: disciplina, message: 'Disciplina Atualizada!' });
    }
    catch(error){
      console.error(error);
      return res.json({ status: false, message: `Erro ao atualizar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.DisciplinaRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'Disciplinas Listadas!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao listar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const result = await this.DisciplinaRepository.find(id);

      if(!result){
        return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
      }

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Disciplina: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const result = await this.DisciplinaRepository.search(req.body);

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var disciplinaSequelize = await this.DisciplinaRepository.find(id);
      
      if(!disciplinaSequelize){
        return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
      }

      const disciplina = new Disciplina(disciplinaSequelize.get()); 

      const result = await this.DisciplinaRepository.delete(disciplina);

      if(!result){
        throw new Error("Disciplina não Deletada!");
      }

      return res.status(200).json({ status: true, data: disciplina, message: 'Disciplina Deletada!' });
    }
    catch (error) {
      return res.json({ status: false, message: `Erro ao deletar Disciplina: ${error.message}`, stack: error.stack });
    }
  }
}


export default DisciplinaController;
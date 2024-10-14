import Disciplina from "../models/Disciplina.js";
import DisciplinaRepository from "../repositories/DisciplinaRepository.js";

class DisciplinaController {
  constructor(database) {
      this.DisciplinaRepository = new DisciplinaRepository(database.getConnection());
  }


  async store(req, res) {
    try {
      const { nome, codProf } = req.body;

      if (!nome || !codProf ) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      const disci = new Disciplina({nome, codProf});

      const result = await this.DisciplinaRepository.create(disci);

      if (!result) {
        throw new Error("Disciplina não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Disciplina Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao registrar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const disciSequelize = await this.DisciplinaRepository.find(id);

      if(!disciSequelize){
        return res.status(404).json({ status: false, message: "Disciplina não encontrado!" });
      }

      const disciplina = new Disciplina(disciSequelize.get());
      disciplina.updateAttributes(req.body);

      const result = await this.DisciplinaRepository.update(disciplina);

      if(!result){
        throw new Error("Disciplina não Atualizado!");
      }

      return res.status(200).json({ status: true, data: disciplina, message: 'Disciplina Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.json({ status: false, message: `Erro ao atualizar Disciplina: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.DisciplinaRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'Disciplina Listados!' });
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
        return res.status(404).json({ status: false, message: "Disciplina não encontrado!" });
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
        return res.status(404).json({ status: false, message: "Disciplina não encontrado!" });
      }

      const disciplina = new Disciplina(disciplinaSequelize.get()); 

      const result = await this.DisciplinaRepository.delete(disciplina);

      return res.status(200).json({ status: true, data: disciplina, message: 'Disciplina Deletado!' });
    }
    catch (error) {
      return res.json({ status: false, message: `Erro ao deletar Disciplina: ${error.message}`, stack: error.stack });
    }
  }
}


export default DisciplinaController;
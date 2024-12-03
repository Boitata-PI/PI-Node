import Grupo from "../models/Grupo.js";
import GrupoRepository from "../repositories/GrupoRepository.js";
import DisciplinaRepository from "../repositories/DisciplinaRepository.js";


class GrupoController {
  constructor(database) {
      this.GrupoRepository = new GrupoRepository(database);
      this.DisciplinaRepository = new DisciplinaRepository(database);
  }


  async store(req, res) {
    try {
      const { nome, codDisc } = req.body;

      if (!nome || !codDisc) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codDisc){
        if(!await this.DisciplinaRepository.find(codDisc)){
          return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
        }
      }

      const grupo = new Grupo({nome, codDisc});

      const result = await this.GrupoRepository.create(grupo);

      if (!result) {
        throw new Error("Grupo não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Grupo Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Grupo: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codProf, codDisc } = req.body;
      const grupoSequelize = await this.GrupoRepository.find(id);

      if(!grupoSequelize){
        return res.status(404).json({ status: false, message: "Grupo não encontrada!" });
      }

      if(codDisc){
        if(!await this.DisciplinaRepository.find(codDisc)){
          return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
        }
      }

      const grupo = new Grupo(grupoSequelize.get());
      grupo.updateAttributes(req.body);

      const result = await this.GrupoRepository.update(grupo);

      if(!result){
        throw new Error("Grupo não Atualizado!");
      }

      return res.status(200).json({ status: true, data: grupo, message: 'Grupo Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar Grupo: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.GrupoRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'Grupos Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar Grupo: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const result = await this.GrupoRepository.find(id);

      if(!result){
        return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
      }

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Grupo: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const result = await this.GrupoRepository.search(req.body);

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Grupo: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var grupoSequelize = await this.GrupoRepository.find(id);
      
      if(!grupoSequelize){
        return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
      }

      const grupo = new Grupo(grupoSequelize.get()); 

      const result = await this.GrupoRepository.delete(grupo);

      if(!result){
        throw new Error("Grupo não Deletada!");
      }

      return res.status(200).json({ status: true, data: grupo, message: 'Grupo Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Grupo: ${error.message}`, stack: error.stack });
    }
  }
}


export default GrupoController;
import Tarefa from "../models/Tarefa.js";
import TarefaRepository from "../repositories/TarefaRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class TarefaController {
  constructor(database) {
      this.TarefaRepository = new TarefaRepository(database);
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

      const tarefa = new Tarefa({nome, codCord});

      const result = await this.TarefaRepository.create(tarefa);

      if (!result) {
        throw new Error("Tarefa não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Tarefa Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Tarefa: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codCord } = req.body;
      const tarefaSequelize = await this.TarefaRepository.find(id);

      if(!tarefaSequelize){
        return res.status(404).json({ status: false, message: "Tarefa não encontrado!" });
      }

      if(codCord){
        if(!await this.UsuarioRepository.find(codProf, 'PROFESSOR')){
          return res.status(404).json({ status: false, message: "Professor não encontrado!" });
        }
      }

      const tarefa = new Tarefa(tarefaSequelize.get());
      tarefa.updateAttributes(req.body);

      const result = await this.TarefaRepository.update(tarefa);

      if(!result){
        throw new Error("Tarefa não Atualizado!");
      }

      return res.status(200).json({ status: true, data: tarefa, message: 'Tarefa Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar Tarefa: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.TarefaRepository.list();

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Tarefas Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar Tarefa: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const resultSequelize = await this.TarefaRepository.find(id);

      if(!resultSequelize){
        return res.status(404).json({ status: false, message: "Tarefa não encontrado!" });
      }

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Tarefa: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.TarefaRepository.search(req.body);

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Tarefa: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var tarefaSequelize = await this.TarefaRepository.find(id);
      
      if(!tarefaSequelize){
        return res.status(404).json({ status: false, message: "Tarefa não encontrado!" });
      }

      const tarefa = new Tarefa(tarefaSequelize.get()); 

      const result = await this.TarefaRepository.delete(tarefa);

      if(!result){
        throw new Error("Tarefa não Deletado!");
      }

      return res.status(200).json({ status: true, data: tarefa, message: 'Tarefa Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Tarefa: ${error.message}`, stack: error.stack });
    }
  }
}


export default TarefaController;
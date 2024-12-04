import TarefaEntrega from "../models/TarefaEntrega.js";
import TarefaEntregaRepository from "../repositories/TarefaEntregaRepository.js";
import TarefaRepository from "../repositories/TarefaRepository.js";
import GrupoRepository from "../repositories/GrupoRepository.js";

class TarefaEntregaController {
  constructor(database) {
      this.TarefaEntregaRepository = new TarefaEntregaRepository(database);
      this.TarefaRepository = new TarefaRepository(database);
      this.GrupoRepository = new GrupoRepository(database);
  }


  async store(req, res) {
    try {
      const { codTarefa, codGrupo, corrigida, dataCorrecao, pontos, comentarios, entrega } = req.body;

      if (!codTarefa || !codGrupo || !corrigida || !dataCorrecao || !pontos || !comentarios || !entrega) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codTarefa){
        if(!await this.TarefaRepository.find(codTarefa)){
          return res.status(404).json({ status: false, message: "Tarefa não encontrada!" });
        }
      }

      if(codGrupo){
        if(!await this.GrupoRepository.find(codGrupo)){
          return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
        }
      }

      const tarefaEntrega = new TarefaEntrega({ codTarefa, codGrupo, corrigida, dataCorrecao, pontos, comentarios, entrega });

      const result = await this.TarefaEntregaRepository.create(tarefaEntrega);

      if (!result) {
        throw new Error("TarefaEntrega não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'TarefaEntrega Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codTarefa, codGrupo, corrigida, dataCorrecao, pontos, comentarios, entrega } = req.body;
      const tarefaEntregaSequelize = await this.TarefaEntregaRepository.find(id);

      if(!tarefaEntregaSequelize){
        return res.status(404).json({ status: false, message: "TarefaEntrega não encontrado!" });
      }

      if(codTarefa){
        if(!await this.TarefaRepository.find(codTarefa)){
          return res.status(404).json({ status: false, message: "Tarefa não encontrada!" });
        }
      }

      if(codGrupo){
        if(!await this.GrupoRepository.find(codGrupo)){
          return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
        }
      }

      const tarefaEntrega = new TarefaEntrega(tarefaEntregaSequelize.get());
      tarefaEntrega.updateAttributes(req.body);

      const result = await this.TarefaEntregaRepository.update(tarefaEntrega);

      if(!result){
        throw new Error("TarefaEntrega não Atualizado!");
      }

      return res.status(200).json({ status: true, data: tarefaEntrega, message: 'TarefaEntrega Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.TarefaEntregaRepository.list();

      return res.status(200).json({ status: true, data: resultSequelize, message: 'TarefaEntregas Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const resultSequelize = await this.TarefaEntregaRepository.find(id);

      if(!resultSequelize){
        return res.status(404).json({ status: false, message: "TarefaEntrega não encontrado!" });
      }

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.TarefaEntregaRepository.search(req.body);

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var tarefaEntregaSequelize = await this.TarefaEntregaRepository.find(id);
      
      if(!tarefaEntregaSequelize){
        return res.status(404).json({ status: false, message: "TarefaEntrega não encontrado!" });
      }

      const tarefaEntrega = new TarefaEntrega(tarefaEntregaSequelize.get()); 

      const result = await this.TarefaEntregaRepository.delete(tarefaEntrega);

      if(!result){
        throw new Error("TarefaEntrega não Deletado!");
      }

      return res.status(200).json({ status: true, data: tarefaEntrega, message: 'TarefaEntrega Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar TarefaEntrega: ${error.message}`, stack: error.stack });
    }
  }
}


export default TarefaEntregaController;
import AlunoGrupo from "../models/AlunoGrupo.js";
import AlunoGrupoRepository from "../repositories/AlunoGrupoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import GrupoRepository from "../repositories/GrupoRepository.js";


class AlunoGrupoController {
  constructor(database) {
      this.AlunoGrupoRepository = new AlunoGrupoRepository(database);
      this.UsuarioRepository = new UsuarioRepository(database);
      this.GrupoRepository = new GrupoRepository(database);
  }


  async store(req, res) {
    try {
      const { codAluno, codGrupo } = req.body;

      if (!codAluno || !codGrupo) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codAluno){
        if(!await this.UsuarioRepository.find(codAluno, 'ALUNO')){
          return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
        }
      }

      if(codGrupo){
        if(!await this.GrupoRepository.find(codGrupo)){
          return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
        }
      }

      const alunoGrupo = new AlunoGrupo({nome, codAluno, codGrupo});

      const result = await this.AlunoGrupoRepository.create(alunoGrupo);

      if (!result) {
        throw new Error("AlunoGrupo não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'AlunoGrupo Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codAluno, codGrupo } = req.body;
      const alunoGrupoSequelize = await this.AlunoGrupoRepository.find(id);

      if(!alunoGrupoSequelize){
        return res.status(404).json({ status: false, message: "AlunoGrupo não encontrado!" });
      }

      if(codAluno){
        if(!await this.UsuarioRepository.find(codAluno, 'ALUNO')){
          return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
        }
      }

      if(codGrupo){
        if(!await this.GrupoRepository.find(codGrupo)){
          return res.status(404).json({ status: false, message: "Grupo não encontrado!" });
        }
      }

      const alunoGrupo = new AlunoGrupo(alunoGrupoSequelize.get());
      alunoGrupo.updateAttributes(req.body);

      const result = await this.AlunoGrupoRepository.update(alunoGrupo);

      if(!result){
        throw new Error("AlunoGrupo não Atualizada!");
      }

      return res.status(200).json({ status: true, data: alunoGrupo, message: 'AlunoGrupo Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.AlunoGrupoRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'AlunoGrupos Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const result = await this.AlunoGrupoRepository.find(id);

      if(!result){
        return res.status(404).json({ status: false, message: "AlunoGrupo não encontrado!" });
      }

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const result = await this.AlunoGrupoRepository.search(req.body);

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var alunoGrupoSequelize = await this.AlunoGrupoRepository.find(id);
      
      if(!alunoGrupoSequelize){
        return res.status(404).json({ status: false, message: "AlunoGrupo não encontrado!" });
      }

      const alunoGrupo = new AlunoGrupo(alunoGrupoSequelize.get()); 

      const result = await this.AlunoGrupoRepository.delete(alunoGrupo);

      if(!result){
        throw new Error("AlunoGrupo não Deletada!");
      }

      return res.status(200).json({ status: true, data: alunoGrupo, message: 'AlunoGrupo Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar AlunoGrupo: ${error.message}`, stack: error.stack });
    }
  }
}


export default AlunoGrupoController;
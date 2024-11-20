import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import bcrypt from 'bcryptjs';

class AlunoController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database);
  }


  async store(req, res) {
    try {
      const { nome, ra } = req.body;
      const tipo = "ALUNO";

      if (!nome || !ra || !req.body.senha) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      const senha = await bcrypt.hash(req.body.senha, 10);

      const aluno = new Usuario({nome, ra, senha, tipo});

      const result = await this.UsuarioRepository.create(aluno);

      if (!result) {
        throw new Error("Aluno não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Aluno Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar Usuario: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const alunoSequelize = await this.UsuarioRepository.find(id);

      if(!alunoSequelize){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      const aluno = new Usuario(alunoSequelize.get());
      aluno.updateAttributes(req.body);

      const result = await this.UsuarioRepository.update(aluno);

      if(!result){
        throw new Error("Aluno não Atualizado!");
      }

      return res.status(200).json({ status: true, data: aluno, message: 'Aluno Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao atualizar Aluno: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.UsuarioRepository.list('ALUNO');

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Alunos Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar Alunos: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const alunoSequelize = await this.UsuarioRepository.find(id, 'ALUNO');

      if(!alunoSequelize){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      return res.status(200).json({ status: true, data: alunoSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Aluno: ${error.message}`, stack: error.stack });
    }
  }


  async search(req, res) {
    try {
      const resultSequelize = await this.UsuarioRepository.search(req.body, 'ALUNO');

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar Alunos: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var alunoSequelize = await this.UsuarioRepository.find(id, 'ALUNO');
      
      if(!alunoSequelize){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      const aluno = new Usuario(alunoSequelize.get()); 

      const result = await this.UsuarioRepository.delete(aluno);

      if(!result){
        throw new Error("Aluno não Deletado!");
      }

      return res.status(200).json({ status: true, data: aluno, message: 'Aluno Deletado!' });
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Aluno: ${error.message}`, stack: error.stack });
    }
  }
}


export default AlunoController;
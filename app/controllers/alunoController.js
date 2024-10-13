import Usuario from "../models/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class AlunoController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database.getConnection());
  }


  async store(req, res) {
    try {
      const { nome, ra, senha } = req.body;
      const tipo = "ALUNO";

      if (!nome || !ra || !senha || !tipo) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      const user = new Usuario({nome, ra, senha, tipo});

      const result = await this.UsuarioRepository.create(user);

      if (!result) {
        throw new Error("Aluno não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'Aluno Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao registrar Usuario: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const Aluno = await this.UsuarioRepository.find(id);

      if(!Aluno){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      const aluno = new Usuario(Aluno.get());
      aluno.updateAttributes(req.body);

      const result = await this.UsuarioRepository.update(aluno);

      if(!result){
        throw new Error("Aluno não Atualizado!");
      }

      return res.status(200).json({ status: true, data: aluno, message: 'Aluno Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.json({ status: false, message: `Erro ao atualizar Aluno: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const result = await this.UsuarioRepository.list();

      return res.status(200).json({ status: true, data: result, message: 'Alunos Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao listar Alunos: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const result = await this.UsuarioRepository.find(id);

      if(!result){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Aluno: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const result = await this.UsuarioRepository.search(req.body);

      return res.status(200).json({ status: true, data: result, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar Alunos: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var Aluno = await this.UsuarioRepository.find(id);
      
      if(!Aluno){
        return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
      }

      const aluno = new Usuario(Aluno.get()); 

      const result = await this.UsuarioRepository.delete(aluno);

      return res.status(200).json({ status: true, data: aluno, message: 'Aluno Deletado!' });
    }
    catch (error) {
      return res.json({ status: false, message: `Erro ao deletar Aluno: ${error.message}`, stack: error.stack });
    }
  }
}


export default AlunoController;
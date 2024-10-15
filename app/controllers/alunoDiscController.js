import AlunoDisc from "../models/AlunoDisc.js";
import AlunoDiscRepository from "../repositories/AlunoDiscRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import DisciplinaRepository from "../repositories/DisciplinaRepository.js";

class AlunoDiscController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database);
      this.DisciplinaRepository = new DisciplinaRepository(database);
      this.AlunoDiscRepository = new AlunoDiscRepository(database);
  }


  async store(req, res) {
    try {
      const { codDisc, codAluno } = req.body;

      if (!codDisc || !codAluno ) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(await this.AlunoDiscRepository.search({ codDisc, codAluno }).length > 0){
        return res.status(409).json({ status: false, message: "AlunoDisc já Cadastrado!" });
      }

      if(codDisc){
        if(!await this.DisciplinaRepository.find(codDisc)){
          return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
        }
      }

      if(codAluno){
        if(!await this.UsuarioRepository.find(codAluno, 'ALUNO')){
          return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
        }
      }

      const alunoDisc = new AlunoDisc({codDisc, codAluno});

      const result = await this.AlunoDiscRepository.create(alunoDisc);

      if (!result) {
        throw new Error("AlunoDisc não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'AlunoDisc Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao registrar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }


  async update(req, res) {
    try{
      const { id } = req.params;
      const { codDisc, codAluno } = req.body;
      const AlunoDiscSequelize = await this.AlunoDiscRepository.find(id);

      if(!AlunoDiscSequelize){
        return res.status(404).json({ status: false, message: "AlunoDisc não encontrado!" });
      }

      if(codDisc){
        if(!await this.DisciplinaRepository.find(codDisc)){
          return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
        }
      }

      if(codAluno){
        if(!await this.UsuarioRepository.find(codAluno, 'ALUNO')){
          return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
        }
      }

      const alunoDisc = new AlunoDisc(AlunoDiscSequelize.get());
      alunoDisc.updateAttributes(req.body);

      const result = await this.AlunoDiscRepository.update(alunoDisc);

      if(!result){
        throw new Error("AlunoDisc não Atualizado!");
      }

      return res.status(200).json({ status: true, data: alunoDisc, message: 'AlunoDisc Atualizado!' });
    }
    catch(error){
      console.error(error);
      return res.json({ status: false, message: `Erro ao atualizar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.AlunoDiscRepository.list();

      return res.status(200).json({ status: true, data: resultSequelize, message: 'AlunoDisc Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao listar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }


  async find(req, res) {
    try {
      const { id } = req.params;

      const resultSequelize = await this.AlunoDiscRepository.find(id);

      if(!resultSequelize){
        return res.status(404).json({ status: false, message: "AlunoDisc não encontrado!" });
      }

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Única Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.AlunoDiscRepository.search(req.body);

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.json({ status: false, message: `Erro ao buscar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;
      var AlunoDiscSequelize = await this.AlunoDiscRepository.find(id);
      
      if(!AlunoDiscSequelize){
        return res.status(404).json({ status: false, message: "AlunoDisc não encontrado!" });
      }

      const alunoDisc = new AlunoDisc(AlunoDiscSequelize.get()); 

      const result = await this.AlunoDiscRepository.delete(alunoDisc);

      if(!result){
        throw new Error("AlunoDisc não Deletado!");
      }

      return res.status(200).json({ status: true, data: alunoDisc, message: 'AlunoDisc Deletado!' });
    }
    catch (error) {
      return res.json({ status: false, message: `Erro ao deletar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }
}


export default AlunoDiscController;
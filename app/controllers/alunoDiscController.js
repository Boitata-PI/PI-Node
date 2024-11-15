import AlunoDisc from "../models/AlunoDisc.js";
import Usuario from "../models/Usuario.js";
import AlunoDiscRepository from "../repositories/AlunoDiscRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import DisciplinaRepository from "../repositories/DisciplinaRepository.js";
import xlsx from 'xlsx';

class AlunoDiscController {
  constructor(database) {
      this.UsuarioRepository = new UsuarioRepository(database);
      this.DisciplinaRepository = new DisciplinaRepository(database);
      this.AlunoDiscRepository = new AlunoDiscRepository(database);
  }


  excelToJson(buffer) {
    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    jsonData.shift(); 
    const headers = jsonData.shift();

    const formattedData = jsonData.map(row => {
        const rowData = {};
        headers.forEach((header, index) => {
            rowData[header] = row[index]; 
        });
        return rowData; 
    });

    return formattedData;
  }

  async getAlunos(jsonAlunos){
    const response = [];
    const tipo = 'ALUNO';

    for (const [index, jsonAluno] of jsonAlunos.entries()) {
      const { RA, ALUNO } = jsonAluno;

      var ra = parseInt(RA);
      var nome = ALUNO;

      if (!ra || !nome) {
        return res.status(400).json({ status: false, message: "Um dos Alunos no Arquivo possui Dados Incompletos!" });
      }

      nome = nome.toUpperCase();

      const senhaString = nome.split(' ')[0].toLowerCase() + ra.toString().substring(0, 3);
      const senha = await bcrypt.hash(senhaString, 10);

      const aluno = new Usuario({nome, ra, senha, tipo});

      const result = await this.UsuarioRepository.findOrCreate(aluno, { ra, tipo });

      if (!result) {
        throw new Error("Alunos não Cadastrados!");
      }

      var resultAluno = result[0];
      aluno.setId(resultAluno.id);

      response.push(aluno);
    };

    return response;
  }


  async store(req, res) {
    try {
      const { codDisc, codAluno, nome, ra } = req.body;

      if (!codDisc) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codDisc){
        if(!await this.DisciplinaRepository.find(codDisc)){
          return res.status(404).json({ status: false, message: "Disciplina não encontrada!" });
        }
      }

      if (req.file) {
        const jsonAlunos = this.excelToJson(req.file.buffer);

        if(!jsonAlunos.length){
          return res.status(400).json({ status: false, message: "Arquivo Excel Vazio!" });
        }

        const alunos = await this.getAlunos(jsonAlunos);

        const alunoDiscs = [];

        for (const aluno of alunos) {
          const alunoDisc = new AlunoDisc({codDisc, codAluno: aluno.getId()});
          
          const result = await this.AlunoDiscRepository.findOrCreate(alunoDisc, { codDisc, codAluno: aluno.getId() });

          if (!result) {
            throw new Error("AlunoDiscs não Cadastrados!");
          }

          var resultAlunoDisc = result[0];
          alunoDisc.setId(resultAlunoDisc.id);

          alunoDiscs.push(alunoDisc);
        }

        return res.status(200).json({ status: true, data: alunoDiscs, message: 'Alunos Cadastrados!' });
      }

      if (!codAluno && (!nome || !ra)) {
        return res.status(400).json({ status: false, message: "Dados Incompletos!" });
      }

      if(codAluno){
        if(!await this.UsuarioRepository.find(codAluno, 'ALUNO')){
          return res.status(404).json({ status: false, message: "Aluno não encontrado!" });
        }

        const alunoDisc = new AlunoDisc({codDisc, codAluno});

        const result = await this.AlunoDiscRepository.findOrCreate(alunoDisc, { codDisc, codAluno });

        if (!result) {
          throw new Error("AlunoDisc não Cadastrado!");
        }

        return res.status(200).json({ status: true, data: result, message: 'AlunoDisc Cadastrado!' });
      }

      const aluno = new Usuario({ ra, nome, tipo: 'ALUNO', senha: nome.split(' ')[0].toLowerCase() + ra.toString().substring(0, 3) });

      var alunoReal = await this.UsuarioRepository.findOrCreate(aluno, { ra, tipo: 'ALUNO' });

      alunoReal = new Usuario(alunoReal[0].get());

      const alunoDisc = new AlunoDisc({codDisc, codAluno: alunoReal.getId()});

      const result = await this.AlunoDiscRepository.findOrCreate(alunoDisc, { codDisc, codAluno: alunoReal.getId() });

      if (!result) {
        throw new Error("AlunoDisc não Cadastrado!");
      }

      return res.status(200).json({ status: true, data: result, message: 'AlunoDisc Cadastrado!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao registrar AlunoDisc: ${error.message}`, stack: error.stack });
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
      return res.status(500).json({ status: false, message: `Erro ao atualizar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }


  async list(req, res) {
    try {
      const resultSequelize = await this.AlunoDiscRepository.list();

      return res.status(200).json({ status: true, data: resultSequelize, message: 'AlunoDiscs Listados!' });
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao listar AlunoDisc: ${error.message}`, stack: error.stack });
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
      return res.status(500).json({ status: false, message: `Erro ao buscar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }

  async search(req, res) {
    try {
      const resultSequelize = await this.AlunoDiscRepository.search(req.body);

      return res.status(200).json({ status: true, data: resultSequelize, message: 'Pesquisa Concluída!' });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: `Erro ao buscar AlunoDisc: ${error.message}`, stack: error.stack });
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
      return res.status(500).json({ status: false, message: `Erro ao deletar AlunoDisc: ${error.message}`, stack: error.stack });
    }
  }
}


export default AlunoDiscController;
import Aluno from '../models/Aluno.js';

class AlunoRepository {
    constructor() {
      this.Alunos = [];
    }
  
    adicionar(Aluno) {
      this.Alunos.push(Aluno);
    }
  
    listar() {
      return this.Alunos;
    }
}
  

export default AlunoRepository;
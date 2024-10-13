import Disciplina from '../models/Disciplina.js';

class DisciplinaRepository {
    constructor() {
        this.disciplinas = [];
    }

    adicionar(disciplina) {
        this.disciplinas.push(disciplina);
    }

    listar() {
        return this.disciplinas;
    }
}

export default DisciplinaRepository;

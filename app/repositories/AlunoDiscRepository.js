import AlunoDisc from '../models/AlunoDisc.js';

class AlunoDiscRepository {
    constructor() {
        this.alunoDiscs = [];
    }

    adicionar(alunoDisc) {
        this.alunoDiscs.push(alunoDisc);
    }

    listar() {
        return this.alunoDiscs;
    }
}

export default AlunoDiscRepository;

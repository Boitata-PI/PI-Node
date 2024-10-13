import Curso from '../models/Curso.js';

class CursoRepository {
    constructor() {
        this.cursos = [];
    }

    adicionar(curso) {
        this.cursos.push(curso);
    }

    listar() {
        return this.cursos;
    }
}

export default CursoRepository;

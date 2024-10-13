import Coordenacao from '../models/Coordenacao.js';

class CoordenacaoRepository {
    constructor() {
        this.coordenacoes = [];
    }

    adicionar(coordenacao) {
        this.coordenacoes.push(coordenacao);
    }

    listar() {
        return this.coordenacoes;
    }
}

export default CoordenacaoRepository;

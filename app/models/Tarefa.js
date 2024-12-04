class Tarefa {
    constructor(params) {
        this.updateAttributes(params);
    }


    updateAttributes(params){
        Object.assign(this, params);
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setCodDisc(codDisc) {
        this.codDisc = codDisc;
    }

    getCodDisc() {
        return this.codDisc;
    }

    setCodProf(codProf) {
        this.codProf = codProf;
    }

    getCodProf() {
        return this.codProf;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setMaterial(material) {
        this.material = material;
    }

    getMaterial() {
        return this.material;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataFechamento(dataFechamento) {
        this.dataFechamento = dataFechamento;
    }

    getDataFechamento() {
        return this.dataFechamento;
    }

    setPontos(pontos) {
        this.pontos = pontos;
    }   

    getPontos() {
        return this.pontos;
    }

    setInstrucoes(instrucoes) {
        this.instrucoes = instrucoes;
    }

    getInstrucoes() {
        return this.instrucoes;
    }
}

export default Tarefa;

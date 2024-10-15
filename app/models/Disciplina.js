class Disciplina {
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

    setNome(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setCodProf(codProf) {
        this.codProf = codProf;
    }

    getCodProf() {
        return this.codProf;
    }

    setCodCurso(codCurso) {
        this.codCurso = codCurso;
    }

    getCodCurso() {
        return this.codCurso;
    }
}

export default Disciplina;

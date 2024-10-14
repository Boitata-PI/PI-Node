class AlunoDisc {
    constructor(params) {
        this.updateAttributes(params);
    }


    updateAttributes(params){
        Object.assign(this, params);
    }

    setCodDisc(codDisc) {
        this.codDisc = codDisc;
    }

    getCodDisc() {
        return this.codDisc;
    }

    setCodAluno(codAluno) {
        this.codAluno = codAluno;
    }

    getCodAluno() {
        return this.codAluno;
    }
}

export default AlunoDisc;
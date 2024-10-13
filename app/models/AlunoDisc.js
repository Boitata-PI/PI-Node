class AlunoDisc {
    constructor(codDisc, codAluno) {
        this.codDisc = codDisc;
        this.codAluno = codAluno;
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

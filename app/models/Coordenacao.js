class Coordenacao {
    constructor(codCurso, codUsuario) {
        this.codCurso = codCurso;
        this.codUsuario = codUsuario;
    }

    setCodCurso(codCurso) {
        this.codCurso = codCurso;
    }

    getCodCurso() {
        return this.codCurso;
    }

    setCodUsuario(codUsuario) {
        this.codUsuario = codUsuario;
    }

    getCodUsuario() {
        return this.codUsuario;
    }
}

export default Coordenacao;

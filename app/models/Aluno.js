class Aluno 
{
    constructor(id, codUsuario, codCurso) {
        this.id = id,
        this.codUsuario = codUsuario,
        this.codCurso = codCurso
    }


    setId(id) {
        this.id = id
    }

    getId() {
        return this.id
    }

    setCodUsuario(codUsuario) {
        this.codUsuario = codUsuario
    }

    getCodUsuario() {
        return this.codUsuario
    }

    setCodCurso(codCurso) {
        this.codCurso = codCurso
    }
}

export default Aluno
class AlunoGrupo
{
    constructor(params) {
        this.updateAttributes(params);
    }


    updateAttributes(params){
        Object.assign(this, params);
    }


    setId(id) {
        this.id = id
    }

    getId() {
        return this.id
    }

    setCodGrupo(codGrupo) {
        this.codGrupo = codGrupo;
    }

    getCodGrupo() {
        return this.codGrupo;
    }

    setCodAluno(codAluno) {
        this.codAluno = codAluno;
    }

    getCodAluno() {
        return this.codAluno;
    }
}

export default AlunoGrupo;
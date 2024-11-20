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

    setCodTarefa(CodTarefa) {
        this.CodTarefa = CodTarefa;
    }

    getCodTarefa() {
        return this.CodTarefa;
    }

    setCodGrupo(codGrupo) {
        this.codGrupo = codGrupo;
    }

    getCodGrupo() {
        return this.codGrupo;
    }

    setCorrigida(corrigida) {
        this.corrigida = corrigida;
    }

    getCorrigida() {
        return this.corrigida;
    }

    setPontos(pontos) {
        this.pontos = pontos;
    }   

    getPontos() {
        return this.pontos;
    }

    setComentarios(comentarios) {
        this.comentarios = comentarios;
    }

    getComentarios() {
        return this.comentarios;
    }
}

export default Tarefa;

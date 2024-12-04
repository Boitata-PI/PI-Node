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

    setCodTarefa(novoCodTarefa) {
        this.codTarefa = novoCodTarefa;
    }

    getCodTarefa() {
        return this.codTarefa;
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

    setDataCorrecao(dataCorrecao) {
        this.dataCorrecao = dataCorrecao;
    }

    getDataCorrecao() {
        return this.dataCorrecao;
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

    setEntrega(entrega) {
        this.entrega = entrega;
    }

    getEntrega() {
        return this.entrega;
    }
}

export default Tarefa;

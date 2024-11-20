class TarefaAnexo {
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

    setFile(file) {
        this.file = file;
    }

    getFile() {
        return this.file;
    }

    setPath(path) {
        this.path = path;
    }

    getPath() {
        return this.path;
    }
}

export default TarefaAnexo;

class Curso {
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

    setCodCord(codCord) {
        this.codCord = codCord;
    }

    getCodCord() {
        return this.codCord;
    }
}

export default Curso;

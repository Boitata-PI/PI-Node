class Grupo
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

    setCodDisc(codDisc) {
        this.codDisc = codDisc;
    }

    getCodDisc() {
        return this.codDisc;
    }

    setNome(nome) {
        this.nome = nome
    }

    getNome() {
        return this.nome
    }
}

export default Grupo;
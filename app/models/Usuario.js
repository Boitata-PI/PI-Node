class Usuario
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

    setNome(nome) {
        this.nome = nome
    }

    getNome() {
        return this.nome
    }

    getRa() {
        return this.ra
    }

    setRa(ra) {
        this.ra = ra
    }

    setSenha(senha) {
        this.senha = senha
    }

    getSenha() {
        return this.senha
    }

    getTipo() {
        return this.tipo
    }

    setTipo(tipo) {
        this.tipo = tipo
    }
}

export default Usuario;
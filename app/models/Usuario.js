class Usuario
{
    constructor(nome, senha, ra) {
        this.nome = nome,
        this.senha = senha,
        this.ra = ra
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

    setSenha(senha) {
        this.senha = senha
    }

    getSenha() {
        return this.senha
    }

    getRA() {
        return this.ra
    }

    setRA(ra) {
        this.ra = ra
    }
}

export default Usuario;
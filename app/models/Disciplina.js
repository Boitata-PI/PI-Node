class Disciplina {
    constructor(id, nome, codUsuario) {
        this.id = id;
        this.nome = nome;
        this.codUsuario = codUsuario;
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

    setCodUsuario(codUsuario) {
        this.codUsuario = codUsuario;
    }

    getCodUsuario() {
        return this.codUsuario;
    }
}

export default Disciplina;

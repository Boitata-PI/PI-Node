class Curso {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
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
}

export default Curso;

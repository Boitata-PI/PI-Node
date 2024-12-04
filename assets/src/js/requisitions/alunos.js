export const cadAlunoForm = async (aluno, disciplina) => {

    const reg = {
      codDisc: disciplina,
      nome: aluno.nome,
      ra: aluno.ra,
    };

    console.log("Aluno",reg);

    try {
        await fetch("http://localhost:8081/alunoDisc/store", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reg),
            credentials: 'include'
        });
    } catch (error) {
        console.error(error);
    }
};

export const cadAlunoAnex = async (file, disciplina) => {

    const formData = new FormData();
    formData.append("codDisc", disciplina);
    formData.append("alunos", file);

    try {
        await fetch("http://localhost:8081/alunoDisc/store", {
            method: "post",
            body: formData,
            credentials: 'include'
        });
    } catch (error) {
        console.error(error);
    }
};
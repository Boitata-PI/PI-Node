export const findProfessor = async (id) => {
    try {

        const response = await fetch("http://localhost:8081/professor/"+id+"/find",{
            credentials: 'include'
        });

        const result = await response.json();
        const professor = result.data;
        console.log("Professor: ", professor);
        return professor;

    } catch (error) {

    }
};

export const listProfessor = async () => {
  try {
    const response = await fetch("http://localhost:8081/professor/list",{
        credentials: "include",
    });

    const result = await response.json();
    const professor = result.data;
    console.log("Professor: ", professor);
    return professor;
  } catch (error) {}
};

export const findAluno = async (id) => {
  try {
    const response = await fetch("http://localhost:8081/aluno/"+id+"/find",{
        credentials: 'include'
    });

    const result = await response.json();
    const aluno = result.data;
    console.log("Aluno: ", aluno);
    return aluno;
  } catch (error) {}
};

export const listAluno = async () => {
  try {
    const response = await fetch("http://localhost:8081/alunoDisc/list",{
        credentials: "include",
    });

    const result = await response.json();
    const aluno = result.data;
    console.log("Aluno: ", aluno);
    return aluno;
  } catch (error) {}
};

export const searchAlunosDisc = async (codDisc) => {
  try {
    
    const response = await fetch("http://localhost:8081/alunoDisc/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codDisc: codDisc,
      }),
      credentials: 'include'
    });
    const result = await response.json();
    const alunos = result.data;
    console.log("Alunos",alunos);
    return alunos
  } catch (error) {
    console.error(error);
  }
};
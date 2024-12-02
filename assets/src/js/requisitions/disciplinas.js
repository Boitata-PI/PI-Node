export const fetchDisciplinas = async () => {
  try {
    console.log(sessionStorage.getItem("codCurso"));

    const response = await fetch("http://localhost:8081/disciplina/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codCurso: sessionStorage.getItem("codCurso"),
      }),
    });
    const result = await response.json();
    const Disciplinas = result.data;
    console.log(Disciplinas);
    Disciplinas.forEach((turma) => {
      createRow(turma);
    });
  } catch (error) {
    console.error(error);
  }
};
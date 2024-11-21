export const cadDisc = async (event) => {
  event.preventDefault();

  const reg = {
    nome: document.getElementById("nameDisciplina").value,
    codProf: document.getElementById("coordenador").value,
    codCurso: sessionStorage.getItem("codCurso"),
  };

  try {
    const response = await fetch("http://localhost:8081/disciplina/store", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg),
    });
    const result = await response.json();
    console.log(result);
    window.location.href = "/disciplinas";
  } catch (error) {
    console.error(error);
  }
};

export const fetchProfessor = async () => {
  try {
    const response = await fetch("http://localhost:8081/professor/list");
    const result = await response.json();
    const professores = result.data;
    console.log(professores);

    professores.forEach((professor) => {
      insertSelect(professor);
    });
  } catch (error) {
    console.error(error);
  }
};

export const insertSelect = (professor) => {
  const { nome, id } = professor;

  const select = document.getElementById("coordenador");

  const option = document.createElement("option");
  option.value = id;
  option.textContent = nome;

  select.appendChild(option);
};
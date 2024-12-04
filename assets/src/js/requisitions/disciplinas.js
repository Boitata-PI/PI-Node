export const searchDisciplinas = async (id) => {
  try {

    const response = await fetch("http://localhost:8081/disciplina/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codProf: id,
      }),
      credentials: 'include'
    });
    const result = await response.json();
    const Disciplinas = result.data;
    console.log(Disciplinas);
    return Disciplinas
  } catch (error) {
    console.error("ERROR",error);
  }
};

export const listDisciplinas = async () => {
  try {
    const response = await fetch("http://localhost:8081/disciplina/list", {
      credentials: 'include'
    });
    const result = await response.json();
    const Disciplinas = result.data;
    console.log(Disciplinas);
    return Disciplinas
  } catch (error) {
    console.error(error);
  }
};

export const findDisciplinas = async (id) => {
  try {
    const response = await fetch("http://localhost:8081/disciplina/"+id+"/find", {
      credentials: 'include'
    });
    const result = await response.json();
    const disciplina = result.data;
    console.log(disciplina);
    return disciplina
  } catch (error) {
    console.error(error);
  }
};

export const cadDisciplina = async (disciplina) => {

  const reg = {
    nome: disciplina.nome,
    codProf: disciplina.professor,
    codCurso: localStorage.getItem("curso"),
  };

  try {
    await fetch("http://localhost:8081/disciplina/store", {
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

}

export const deleteDisciplinas = async (id) => {

  try {
    await fetch("http://localhost:8081/disciplina/"+id+"/delete", {
      method: "DELETE",
      credentials: 'include'
    });
  } catch (error) {
    console.error(error);
  }

}

export const updateDisciplina = async (disciplina) => {

  const reg = {
    nome: disciplina.nome,
    codProf: disciplina.codProf,
    codCurso: disciplina.codCurso
  };

  try {
    await fetch("http://localhost:8081/disciplina/"+disciplina.id+"/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg),
      credentials: 'include'
    });
  } catch (error) {
    console.error(error);
  }

}
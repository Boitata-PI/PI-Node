export const searchCursos = async (codCord) => {
  try {

    const userData = JSON.parse(localStorage.getItem("userData"))

    console.log("ID: " + userData.id);
    
    const response = await fetch("http://localhost:8081/curso/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codCord: userData.id,
      }),
      credentials: 'include'
    });
    const result = await response.json();
    const cursos = result.data;
    console.log(cursos);
    return cursos
  } catch (error) {
    console.error(error);
  }
};

export const findCursos = async (id) => {

  try{

    const response = await fetch("http://localhost:8081/curso/"+id+"/find",{
      credentials: 'include'
    })
    const result = await response.json()
    const cursos = result.data;
    console.log("Cursos: ", cursos)
    return cursos

  }catch (error){
    console.error(error)
  }

}

export const updateCursos = async (id) => {

  const reg = {
    codCord: document.getElementById("coordenador").value,
    nome: document.getElementById("namecurso").value,
  }

  try {

    await fetch("http://localhost:8081/curso/"+id+"/update",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg),
      credentials: 'include'
    });
    
  } catch (error) {
    
  }

}

export const deleteCursos = async (id) => {

  try {

    await fetch("http://localhost:8081/curso/"+id+"/delete",{
      method: "DELETE",
      credentials: 'include'
    });
    
  } catch (error) {
    
  }

}

export const cadCursos = async (curso) => {

  const reg = {
    codCord: curso.codCord,
    nome: curso.nome,
  }

  try {

    await fetch("http://localhost:8081/curso/store",{
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg),
      credentials: 'include'
    });
    
  } catch (error) {
    
  }
      
}
export const searchTarefas = async (id) => {

    try {
        const response = await fetch("http://localhost:8081/tarefa/search", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            codDisc: id,
          }),
          credentials: "include",
        });
        const result = await response.json();
        const tarefas = result.data;
        console.log(tarefas);
        return tarefas;
    } catch (error) {}
};

export const listTarefas = async () => {

    try {
        const response = await fetch("http://localhost:8081/tarefa/list",{
            credentials: "include",
        });
        const result = await response.json();
        const tarefas = result.data;
        console.log(tarefas);
        return tarefas;
    } catch (error) {}
};

export const findTarefas = async (id) => {

    try {
        const response = await fetch("http://localhost:8081/tarefa/"+id+"/find",{
            credentials: "include",
        });
        const result = await response.json();
        const tarefa = result.data;
        console.log(tarefa);
        return tarefa;
    } catch (error) {}
};

export const cadTarefas = async (tarefa) => {

    const reg = {
      codDisc: localStorage.getItem("disciplina"),
      nome: tarefa.nome,
      material: JSON.stringify(tarefa.material),
      instrucoes: tarefa.instrucoes,
      dataVencimento: tarefa.dataVencimento,
      dataFechamento: tarefa.dataFechamento,
      pontos: tarefa.pontos,
    };

    console.log(reg);

    try {
        const response = await fetch("http://localhost:8081/tarefa/store", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reg),
            credentials: "include",
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {}    
};

export const deleteTarefa = async (id) => {
    try {
        const response = await fetch("http://localhost:8081/tarefa/"+id+"/delete", {
            method: "DELETE",
            credentials: "include",
        });
    } catch (error) {}
};

export const searchEntregas = async (id, grupo) => {

    try {
        const response = await fetch("http://localhost:8081/tarefaEntrega/search", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            codTarefa: id,
            codGrupo: grupo,
          }),
          credentials: "include",
        }); 
        const result = await response.json();
        const entregas = result.data;
        console.log(entregas);
        return entregas;
    } catch (error) {}
};

export const searchEntregaTarefa = async (params) => {
  try {
    const response = await fetch("http://localhost:8081/tarefaEntrega/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      credentials: "include",
    });
    const result = await response.json();
    const entregas = result.data;
    console.log(entregas);
    return entregas;
  } catch (error) {}
};

export const cadEntregas = async (entrega) => {

    const reg = {
        codTarefa: entrega.codTarefa,
        codGrupo: entrega.codGrupo,
        corrigida: 0,
        dataCorrecao: null,
        pontos: 0,
        comentarios: null,
        entrega: entrega.entrega
    }

  try {
    const response = await fetch("http://localhost:8081/tarefaEntrega/store", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entrega),
      credentials: "include",
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {}
};

export const updateEntrega = async (id, entrega) => {

    console.log(entrega);

    const reg = {
      entrega: entrega,
    };


  try {
    const response = await fetch("http://localhost:8081/tarefaEntrega/"+id+"/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entrega),
      credentials: "include",
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {}
};
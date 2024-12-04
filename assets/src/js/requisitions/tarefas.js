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
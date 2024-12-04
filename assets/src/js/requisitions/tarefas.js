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
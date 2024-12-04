export const searchGrupos = async (id) => {
    try {
        const response = await fetch("http://localhost:8081/grupo/search", {
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
        const grupos = result.data;
        console.log(grupos);
        return grupos;
    } catch (error) {}
};

export const cadGrupo = async (id,grupo) => {

    const reg = {
        codDisc: id,
        nome: grupo.nome,
    };

    try {
        await fetch("http://localhost:8081/grupo/store", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reg),
            credentials: "include",
        });
    } catch (error) {}
};
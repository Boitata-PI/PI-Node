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

export const findGrupo = async (id) => {
    try {
        const response = await fetch("http://localhost:8081/grupo/" + id + "/find", {
            credentials: "include",
        });
        const result = await response.json();
        const grupo = result.data;
        console.log(grupo);
        return grupo;
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

export const searchGruposAluno = async (id) => {
    try {
        const response = await fetch("http://localhost:8081/AlunoGrupo/search", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codAluno: id,
            }),
            credentials: "include",
        });
        const result = await response.json();
        const grupos = result.data;
        console.log(grupos);
        return grupos;
    } catch (error) {}
};

export const searchAlunosGrupo = async (id) => {
    try {
        const response = await fetch("http://localhost:8081/alunoGrupo/search", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codGrupo: id,
            }),
            credentials: "include",
        });
        const result = await response.json();
        const alunos = result.data;
        console.log(alunos);
        return alunos;
    } catch (error) {}
};

export const deleteGrupo = async (id) => {
    try {
        await fetch("http://localhost:8081/grupo/" + id + "/delete", {
            method: "DELETE",
            credentials: "include",
        });
    } catch (error) {}
};

export const updateGrupos = async (grupo) => {

    const reg = {
        nome: grupo.nome,
    };

    try {
        await fetch("http://localhost:8081/grupo/" + grupo.id + "/update", {
            method: "PUT",            
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reg),
            credentials: "include",
        });
    } catch (error) {}
};
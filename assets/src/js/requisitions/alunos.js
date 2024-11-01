const fetchAlunos = async () => {
    try {

        console.log(sessionStorage.getItem("codDisc"));


        const response = await fetch("http://localhost:8081/alunoDisc/search",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codDisc: sessionStorage.getItem("codDisc"),
            })
        });
        const result = await response.json();
        const alunos = result.data.map((item) => item.Usuario);
        console.log(alunos);
        alunos.forEach((aluno) => {
            createRow(aluno);
        });
    } catch (error) {
        console.error(error);
    }
}

const createElement = (tag) => {
    const element = document.createElement(tag);
    return element;
}

const createRow = (aluno) => {

    const { nome } = aluno;

    const container = document.getElementsByClassName("tasks-container")[0];

    const taskItem = createElement('div');
    taskItem.classList.add("task-item");

    const taskIcon = createElement('div');
    taskIcon.classList.add("task-icon");

    const taskInfo = createElement('div');
    taskInfo.classList.add("task-info");

    const p = createElement('p');
    p.textContent = nome;

    taskInfo.appendChild(p);
    taskItem.appendChild(taskIcon);
    taskItem.appendChild(taskInfo);

    container.appendChild(taskItem);

}

fetchAlunos();
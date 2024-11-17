const fetchTurmas = async () => {
  try {
    
    const response = await fetch("http://localhost:8081/curso/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codCord: 2,
      }),
    });
    const result = await response.json();
    const turmas = result.data;
    console.log(turmas);
    turmas.forEach((turma) => {
      createRow(turma);
    });
  } catch (error) {
    console.error(error);
  }
};

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

const createRow = (turma) => {
  const { id, nome } = turma;

  const container = document.getElementsByClassName("turma-container")[0];

  const turmaCard = createElement("div");
  turmaCard.classList.add("turma-card");

  const turmaInfo = createElement("div");
  turmaInfo.classList.add("turma-info");

  const h3 = createElement("h3");
  h3.textContent = nome + " ";

  const span = createElement("span");
  span.textContent = "(06302)";

  const tags = createElement("div");
  tags.classList.add("tags");

  const tag1 = createElement("div");
  tag1.classList.add("tag");
  tag1.textContent = "MANHÃ";

  const tag2 = createElement("div");
  tag2.classList.add("tag");
  tag2.textContent = "1º SEMESTRE";

  const verMais = createElement("div");
  verMais.classList.add("ver-mais");

  const a = createElement("a");
  a.classList.add("btn-branco");
  a.addEventListener("click", () => {
    sessionStorage.setItem("codCurso", id);
    window.location.href = "/disciplinas";
  });

  const btn = createElement("button");
  btn.classList.add("ver-mais-btn");
  btn.textContent = "VER MAIS";

  a.appendChild(btn);
  verMais.appendChild(a);

  h3.appendChild(span);

  turmaInfo.appendChild(h3);

  tags.appendChild(tag1);
  tags.appendChild(tag2);

  turmaInfo.appendChild(tags);

  turmaCard.appendChild(turmaInfo);
  turmaCard.appendChild(verMais);

  container.appendChild(turmaCard);
};

fetchTurmas();

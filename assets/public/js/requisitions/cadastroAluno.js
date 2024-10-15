console.log(sessionStorage.getItem("codDisc"));

const cadAlunoForm = async (event) => {
  event.preventDefault();

  const reg = {
    nome: document.getElementById("name").value,
    ra: document.getElementById("rm").value,
    codDisc: sessionStorage.getItem("codDisc"),
  };

  try {
    const response = await fetch("http://localhost:8081/alunoDisc/store", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg),
    });
    const result = await response.json();
    console.log(result);
    window.location.href = "/alunos";
  } catch (error) {
    console.error(error);
  }
};

const regForm = document.getElementById("regForm");
regForm.addEventListener("submit", cadAlunoForm);


const cadAlunoAnex = async (event) => {
  event.preventDefault();

    const formData = new FormData();

    formData.append("codDisc", sessionStorage.getItem("codDisc"));
    const arquivoInput = document.getElementById("arquivo");
    formData.append("alunos", arquivoInput.files[0]);

    formData.forEach((value, key) => {
      console.log(key + ": " + value);
    });


  try {
    const response = await fetch("http://localhost:8081/alunoDisc/store", {
      method: "post",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
   window.location.href = "/alunos";
  } catch (error) {
    console.error(error);
  }
};

const anexForm = document.getElementById("anexForm");
anexForm.addEventListener("submit", cadAlunoAnex);
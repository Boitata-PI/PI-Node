const inputRM = document.getElementById("RM");
const inputName = document.getElementById("nome");
const inputPassword = document.getElementById("password");
const inputConfPass = document.getElementById("confPass");

const register = async (event) => {

    event.preventDefault();

    const reg = {
        ra: inputRM.value,
        nome: inputName.value,
        senha: inputPassword.value
    };

    try {
        const response = await fetch("http://localhost:8081/professor/store", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reg),
        });
        const result = await response.json();
        console.log(result);
        window.location.href = "/index";
    } catch (error) {
        console.error(error);
    }

}

const regForm = document.getElementById("regForm");
regForm.addEventListener("submit", register);
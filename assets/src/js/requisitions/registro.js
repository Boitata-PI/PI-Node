export const register = async (event, rm, nome, senha) => {

    event.preventDefault();

    const reg = {
        ra: rm,
        nome: nome,
        senha: senha
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

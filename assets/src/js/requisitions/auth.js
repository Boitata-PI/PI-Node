export const login = async (ra, senha, router) => {

    try{

        const response = await fetch("http://localhost:8081/auth/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ra,
            senha,
          }),
          credentials: "include",
        });

        const data = await response.json()
        const { usuario } = data.data;

        localStorage.setItem("userData", JSON.stringify(usuario));

        console.log(response.ok)

        if (response.ok) {
          window.location.href = "/index";
        } else {
          const errorData = await response.json();
          console.error("Erro ao fazer login:", errorData.message);
          alert("Erro: " + errorData.message);
        }

    }catch (error){

    }

}

export const checkAuth = async () => {

    try {
      const response = await fetch("http://localhost:8081/auth/checkAuth", {
        credentials: "include",
      });

      return response.ok
    } catch (error) {

    }

}
export const checkAuthLogin = async () => {
  try {
    const response = await fetch("http://localhost:8081/auth/checkAuth", {
      credentials: "include",
    });

    console.log(response.status)
    return response.status;
  } catch (error) {}
};

export const logout = async () => {

  try{

    await fetch("http://localhost:8081/auth/logout",{
      credentials: 'include'
    });

    localStorage.clear()

    window.location.href = "/"

  }catch (error){

  }

}
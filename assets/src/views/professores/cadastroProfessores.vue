<template>
  <main class="login-container">
    <div class="form-container">

      <h1>Adicionar Professor</h1>
      <br>
      <form @submit.prevent="cadAlunoForm" id="regForm">
        <label for="rm">Registro Professor:</label>
        <input v-model="ra" type="text" id="rm" name="rm" placeholder="Insira o RM">

        <label for="name">Nome completo:</label>
        <input v-model="nome" type="text" id="name" name="name" placeholder="Insira o nome completo">

        <button type="submit" class="submit-btn">Cadastrar</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      ra: '',
    };
  },
  methods: {
    async cadAlunoForm() {
      const reg = {
        nome: this.nome,
        ra: this.ra,
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
        this.$router.push("/alunos");
      } catch (error) {
        console.error(error);
      }
    },
    async cadAlunoAnex() {
      const formData = new FormData();
      formData.append("codDisc", sessionStorage.getItem("codDisc"));
      formData.append("alunos", this.$refs.arquivo.files[0]);

      try {
        const response = await fetch("http://localhost:8081/alunoDisc/store", {
          method: "post",
          body: formData,
        });
        const result = await response.json();
        console.log(result);
        this.$router.push("/alunos");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos */
/* Form Section */
.form-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f9f9f9;
}

.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 450px;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
  color: #555555;
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  transition: 0.3s;
}

.submit-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
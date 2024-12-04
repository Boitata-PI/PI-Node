<template>
  <main class="login-container">
    <div class="form-container">

      <h1>Adicionar Professor</h1>
      <br>
      <form @submit.prevent="handleCadastro()" id="regForm">
        <label for="rm">Registro Professor:</label>
        <input v-model="professor.ra" type="text" id="rm" name="rm" placeholder="Insira o RM">

        <label for="name">Nome completo:</label>
        <input v-model="professor.nome" type="text" id="name" name="name" placeholder="Insira o nome completo">

        <button type="submit" class="submit-btn">Cadastrar</button>
      </form>
    </div>
  </main>
</template>

<script>

import { cadProfessor } from '../../js/requisitions/users';

export default {
  data() {
    return {
      professor: {},
    };
  },
  methods: {
    async handleCadastro() {
      try {
        await cadProfessor(this.professor);
        this.$router.back();
      } catch (error) {
        console.error("Erro ao cadastrar o professor:", error);
      }
    }
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
<template>
  <main class="form-container">
    <h1>Adicionar Curso</h1>
    <form @submit.prevent="handleCadastro()" id="regForm">
      <label for="name">Nome do Curso:</label>
      <input type="text" v-model="curso.nome" id="namecurso" name="namecurso" placeholder="Insira o nome do Curso" required />

      <label for="periodo">Período:</label>
      <select v-model="curso.periodo" id="periodo" name="periodo" required>
        <option value="" disabled selected>Selecione o Período</option>
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>

      <label for="coordenador">Nome do Coordenador:</label>
      <select v-model="curso.codCord" id="coordenador" name="coordenador" required>
          <option value="" disabled selected>Selecione o Coordenador</option>
          <option v-for="professor in professores" :key="professor.id" :value="professor.id">
            {{ professor.nome }}
          </option>
        </select>

      <button type="submit" class="submit-btn">Cadastrar</button>
    </form>
  </main>
</template>

<script>

import { cadCursos } from "../../js/requisitions/cursos";
import { listProfessor } from "../../js/requisitions/users";

export default {
  data() {
    return {
      curso: {},
      professores: {}
    };
  },
  methods: {
    cadCursos,
    async handleCadastro() {
      try {
        await cadCursos(this.curso);
        this.$router.push("/index");
      } catch (error) {
        console.error("Erro ao cadastrar o curso:", error);
      }
    }
  },
  async mounted() {
    this.professores = await listProfessor();
  }
};
</script>

<style scoped>
/* Estilo aprimorado */
.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-top: 15px;
  display: block;
}

input, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
}
</style>

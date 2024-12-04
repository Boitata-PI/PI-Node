<template>
  <!-- Conteúdo Principal -->
  <main class="login-container">  
    <div class="form-container">
      <!-- Formulário de Cadastro Manual -->
      <h1>Adicionar Aluno</h1>
    <p>Adicione manualmente ou importe um arquivo</p>
    <br>

      <form @submit.prevent="handleCadForm()" id="regForm">
        <label for="rm">Registro Aluno:</label>
        <input v-model="aluno.ra" type="text" id="rm" name="rm" placeholder="Insira o RA" required />

        <label for="name">Nome completo:</label>
        <input v-model="aluno.nome" type="text" id="name" name="name" placeholder="Insira o nome completo" required />

        <button type="submit" class="submit-btn">Cadastrar</button>
      </form>

      <!-- Formulário de Cadastro por Anexo -->
      <form @submit.prevent="handlecadAnex()" id="anexForm">
        <div class="buttons">
          <button type="submit" class="attach-btn">Anexo</button>
          <hr />
          <label for="arquivo">OU</label>
          <label for="arquivo">Selecione um arquivo:</label>
          <input ref="arquivo" class="submit-btn" type="file" id="arquivo" name="arquivo" />
        </div>
      </form>
    </div>
  </main>
</template>

<script>

import { cadAlunoForm, cadAlunoAnex } from '../../js/requisitions/alunos';

export default {
  data() {
    return {
      aluno: {},
    };
  },
  methods: {
    cadAlunoForm,
    cadAlunoAnex,
    async handleCadForm() {
      try {
        await cadAlunoForm(this.aluno, localStorage.getItem('disciplina'));
        this.$router.back();
      } catch (error) {
        console.error(error);
      }
    },
    async handlecadAnex() {
      try {
        await cadAlunoAnex(this.$refs.arquivo.files[0], localStorage.getItem('disciplina'));
        this.$router.back();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para a tela de cadastro de aluno */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
}

label {
  font-weight: bold;
  color: #555;
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

button {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 10px;
}

.submit-btn {
  background-color: #007bff;
  color: white;
  border: none;
}

.submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.submit-btn:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.attach-btn {
  background-color: #28a745;
  color: white;
  border: none;
}

.attach-btn:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.attach-btn:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

hr {
  margin-top: 20px;
  border: 0;
  border-top: 1px solid #ddd;
}
</style>

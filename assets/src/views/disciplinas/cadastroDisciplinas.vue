<template>
  <main class="form-container">
    <h1>Adicionar Disciplina</h1>
    <form @submit.prevent="cadDisc" id="regForm">
      <label for="name">Nome da Disciplina:</label>
      <input type="text" v-model="disciplina.nome" id="nameDisciplina" name="nameDisciplina" placeholder="Insira o nome da Disciplina" required />

      <label for="professor">Nome do Professor:</label>
      <select v-model="disciplina.professor" id="professor" name="professor" required>
        <option value="" disabled selected>Selecione o Professor</option>
        <!-- Professores serão preenchidos dinamicamente -->
      </select>

      <button type="submit" class="submit-btn">Cadastrar</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      disciplina: {
        nome: '',
        professor: '',
      },
    };
  },
  methods: {
    async cadDisc() {
      try {
        // Lógica para cadastro da disciplina (pode ser uma chamada API)
        alert(`Disciplina ${this.disciplina.nome} cadastrada com sucesso!`);
        this.$router.push('/disciplinas');
      } catch (error) {
        console.error('Erro ao cadastrar disciplina:', error);
        alert('Erro ao tentar cadastrar a disciplina.');
      }
    },
  },
};
</script>

<style scoped>
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

<template>
  <!-- Container de formulário de cadastro -->
  <div class="form-container">
    <h1>Cadastrar Novo Grupo</h1>
    <form @submit.prevent="createGrupo" id="createForm">
      <label for="nome">Nome do Grupo:</label>
      <input type="text" v-model="grupo.nome" id="nome" name="nome" placeholder="Nome do Grupo" required />

      <label for="professor">Professor TG:</label>
      <input type="text" v-model="grupo.professor" id="professor" name="professor"
        placeholder="Professor" required />

      <button type="submit" class="submit-btn">Criar Grupo</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grupo: {
        nome: '',
        descricao: '',
        integrantes: '',
      },
    };
  },
  methods: {
    async createGrupo() {
      try {
        alert(`Grupo ${this.grupo.nome} criado com sucesso!`);
        this.$router.push('/grupos');
      } catch (error) {
        console.error('Erro ao criar o grupo:', error);
        alert('Erro ao tentar criar o grupo.');
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

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

button {
  background-color: #218838;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover {
  background-color: #1b9c37;
}
</style>
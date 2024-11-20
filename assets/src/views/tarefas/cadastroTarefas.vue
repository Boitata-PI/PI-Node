<template>
  <!-- Formulário de Cadastrar Tarefa -->
  <main class="form-container">
    <h1>Cadastrar Tarefa</h1>
    <form @submit.prevent="createTarefa" id="createForm">
      <label for="titulo">Título da Tarefa:</label>
      <input type="text" v-model="tarefa.titulo" id="titulo" name="titulo" placeholder="Insira o título da tarefa"
        required />

      <label for="descricao">Descrição:</label>
      <textarea v-model="tarefa.descricao" id="descricao" name="descricao" placeholder="Descrição da tarefa"
        required></textarea>

      <label for="prazo">Prazo de Conclusão:</label>
      <input type="date" v-model="tarefa.prazo" id="prazo" name="prazo" required />

      <button type="submit" class="submit-btn">Salvar Tarefa</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tarefa: {
        titulo: '',
        descricao: '',
        prazo: '',
      },
    };
  },
  methods: {
    async createTarefa() {
      try {
        // Lógica para criar tarefa (ex: envio para API)
        alert(`Tarefa "${this.tarefa.titulo}" criada com sucesso!`);
        this.$router.push('/tarefas');
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        alert('Erro ao tentar criar a tarefa.');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos mantidos */
.form-container {
  padding: 30px;
  background: #ffffff;
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
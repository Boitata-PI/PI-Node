<template>
  <!-- Formulário de Cadastrar Tarefa -->
  <main class="form-container">
    <h1>Cadastrar Tarefa</h1>
    <form @submit.prevent="createTarefa" id="createForm">
      <label for="nome">Nome da Tarefa:</label>
      <input type="text" v-model="tarefa.nome" id="nome" name="nome" placeholder="Insira o nome da tarefa" required />

      <label for="dataVencimento">Data de Vencimento:</label>
      <input type="date" v-model="tarefa.dataVencimento" id="dataVencimento" name="dataVencimento" required />

      <label for="dataFechamento">Data de Fechamento:</label>
      <input type="date" v-model="tarefa.dataFechamento" id="dataFechamento" name="dataFechamento" required />

      <label for="instrucoes">Instruções:</label>
      <textarea v-model="tarefa.instrucoes" id="instrucoes" name="instrucoes" placeholder="Instruções para a tarefa" required></textarea>

      <label for="pontos">Pontos:</label>
      <input type="number" v-model="tarefa.pontos" id="pontos" name="pontos" placeholder="Insira a quantidade de pontos" min="0" max="10" required />

      <label for="arquivos">Arquivos de Apoio:</label>
      <input type="file" @change="handleFileUpload" id="arquivos" name="arquivos" multiple />

      <button type="submit" class="submit-btn">Salvar Tarefa</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tarefa: {
        nome: '',
        dataVencimento: '',
        dataFechamento: '',
        instrucoes: '',
        pontos: '',
        arquivos: [], // Para armazenar arquivos
      },
    };
  },
  methods: {
    async createTarefa() {
      try {
        // Lógica para criar tarefa (ex: envio para API)
        alert(`Tarefa "${this.tarefa.nome}" criada com sucesso!`);
        this.$router.push('/tarefas');
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        alert('Erro ao tentar criar a tarefa.');
      }
    },
    handleFileUpload(event) {
      this.tarefa.arquivos = Array.from(event.target.files); // Armazena os arquivos selecionados
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
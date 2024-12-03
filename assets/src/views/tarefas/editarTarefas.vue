<template>
  <!-- Formulário de Editar Tarefa -->
  <main class="form-container">
    <h1>Editar Tarefa</h1>
    <form @submit.prevent="updateTarefa">
      <label for="nome">Nome da Tarefa:</label>
      <input type="text" v-model="tarefa.nome" id="nome" name="nome" required />

      <label for="dataVencimento">Data de Vencimento:</label>
      <input type="date" v-model="tarefa.dataVencimento" id="dataVencimento" name="dataVencimento" required />

      <label for="dataFechamento">Data de Fechamento:</label>
      <input type="date" v-model="tarefa.dataFechamento" id="dataFechamento" name="dataFechamento" required />

      <label for="instrucoes">Instruções:</label>
      <textarea v-model="tarefa.instrucoes" id="instrucoes" name="instrucoes" required></textarea>

      <label for="pontos">Pontos (0 a 10):</label>
      <input type="number" v-model="tarefa.pontos" id="pontos" name="pontos" min="0" max="10" required />

      <label for="arquivos">Arquivos de Apoio:</label>
      <input type="file" @change="handleFileUpload" id="arquivos" name="arquivos" multiple />

      <button type="submit" class="submit-btn">Editar</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tarefa: {
        nome: 'Estudar Vue.js',
        dataVencimento: '2024-12-20',
        dataFechamento: '2024-12-25',
        instrucoes: 'Revisar os conceitos básicos de Vue.js.',
        pontos: 10,
        arquivos: [], // Para armazenar arquivos, se necessário
      },
    };
  },
  methods: {
    async updateTarefa() {
      try {
        // Lógica para atualizar a tarefa (ex: envio para API)
        alert(`Tarefa "${this.tarefa.nome}" atualizada com sucesso!`);
        this.$router.push('/tarefas');
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        alert('Erro ao tentar atualizar a tarefa.');
      }
    },
    handleFileUpload(event) {
      this.tarefa.arquivos = Array.from(event.target.files); // Armazena os arquivos selecionados
    },
  },
};
</script>

<style scoped>
/* Estilos mantidos para edição */
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
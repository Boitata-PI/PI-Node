<template>
  <!-- Formulário de Cadastrar Tarefa -->
  <main class="form-container">
    <h1>Cadastrar Tarefa</h1>
    <form @submit.prevent="handleCreateTarefa()" id="createForm">
      <label for="nome">Nome da Tarefa:</label>
      <input type="text" v-model="tarefa.nome" id="nome" name="nome" placeholder="Insira o nome da tarefa" required />

      <label for="dataVencimento">Data de Vencimento:</label>
      <input type="date" v-model="tarefa.dataVencimento" id="dataVencimento" name="dataVencimento" required />

      <label for="dataFechamento">Data de Fechamento:</label>
      <input type="date" v-model="tarefa.dataFechamento" id="dataFechamento" name="dataFechamento" required />

      <label for="instrucoes">Instruções:</label>
      <textarea v-model="tarefa.instrucoes" id="instrucoes" name="instrucoes" placeholder="Instruções para a tarefa"
        required></textarea>

      <label for="pontos">Pontos:</label>
      <input type="number" v-model="tarefa.pontos" id="pontos" name="pontos" placeholder="Insira a quantidade de pontos"
        min="0" max="10" required />

      <label>Links:</label>
      <div v-for="(link, index) in tarefa.material" :key="index" class="link-group">
        <input type="text" v-model="tarefa.material[index].nome" placeholder="Insira o nome" required />
        <input type="url" v-model="tarefa.material[index].link" placeholder="Insira o link" required />
        <button type="button" @click="removeLink(index)" class="remove-btn">Remover</button>
      </div>
      <button type="button" @click="addLink" class="add-btn">Adicionar Link</button>

      <button type="submit" class="submit-btn">Salvar Tarefa</button>
    </form>
  </main>
</template>

<script>

import { cadTarefas } from '../../js/requisitions/tarefas';

export default {
  data() {
    return {
      tarefa: {
        nome: '',
        dataVencimento: '',
        dataFechamento: '',
        instrucoes: '',
        pontos: '',
        material: [], // Inicializa com um link vazio
      },
    };
  },
  methods: {
    async handleCreateTarefa() {
      try {
        await cadTarefas(this.tarefa);
        this.$router.back();
      } catch (error) {
        console.error(error);
      }
    },
    addLink() {
      this.tarefa.material.push({ nome: '', link: '' }); // Adiciona um novo campo de link vazio
    },
    removeLink(index) {
      this.tarefa.material.splice(index, 1); // Remove o link pelo índice
    },
  },
  mounted() {
    this.addLink();
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
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 0px;
  font-size: 16px;
}

.link-group {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
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

.add-btn,
.remove-btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}

.add-btn:hover,
.remove-btn:hover {
  background-color: #0056b3;
}
</style>
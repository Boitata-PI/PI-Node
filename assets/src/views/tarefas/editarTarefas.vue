<template>
  <!-- Formulário de Editar Tarefa -->
  <main class="form-container">
    <h1>Editar Tarefa</h1>
    <form @submit.prevent="updateTarefa">
      <label for="titulo">Título da Tarefa:</label>
      <input type="text" v-model="tarefa.titulo" id="titulo" name="titulo" required />

      <label for="descricao">Descrição:</label>
      <textarea v-model="tarefa.descricao" id="descricao" name="descricao" required></textarea>

      <label for="prazo">Prazo de Conclusão:</label>
      <input type="date" v-model="tarefa.prazo" id="prazo" name="prazo" required />

      <button type="submit" class="submit-btn">Atualizar Tarefa</button>
    </form>
  </main>

</template>

<script>
export default {
  data() {
    return {
      tarefa: {
        id: '1',
        titulo: 'Estudar Vue.js',
        descricao: 'Revisar os conceitos básicos de Vue.js.',
        prazo: '2024-12-20',
      },
    };
  },
  methods: {
    async updateTarefa() {
      try {
        // Lógica para atualizar a tarefa
        alert(`Tarefa "${this.tarefa.titulo}" atualizada com sucesso!`);
        this.$router.push('/tarefas');
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        alert('Erro ao tentar atualizar a tarefa.');
      }
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
</style>
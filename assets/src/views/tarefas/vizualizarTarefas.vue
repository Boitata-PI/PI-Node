<template>
  <!-- Visualização da Tarefa -->
  <main class="view-container">
    <h1>Detalhes da Tarefa</h1>

    <div class="details-container">
      <div class="detail-item">
        <strong>Título:</strong>
        <span>{{ tarefa.titulo }}</span>
      </div>
      <div class="detail-item">
        <strong>Descrição:</strong>
        <span>{{ tarefa.descricao }}</span>
      </div>
      <div class="detail-item">
        <strong>Prazo:</strong>
        <span>{{ tarefa.prazo }}</span>
      </div>

      <div class="button-container">
        <router-link :to="'/editar-tarefa/' + tarefa.id">
          <button class="action-btn edit-btn">Editar</button>
        </router-link>
        <button @click="deleteTarefa" class="action-btn delete-btn">Excluir</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tarefa: {
        id: '1',
        titulo: 'Estudar Vue.js',
        descricao: 'Estudar os conceitos de Vue.js para o projeto.',
        prazo: '2024-12-15',
      },
    };
  },
  methods: {
    async deleteTarefa() {
      try {
        alert(`Tarefa "${this.tarefa.titulo}" excluída com sucesso!`);
        this.$router.push('/tarefas');
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        alert('Erro ao tentar excluir a tarefa.');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos mantidos para visualização */
.view-container {
  padding: 30px;
  max-width: 1500px;
  margin: 50px auto;
  background: #f8f9fa;
  border-radius: 8px;
}

h1 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.details-container {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-item strong {
  font-size: 16px;
  margin-right: 10px;
}

.detail-item span {
  font-size: 16px;
  color: #666;
}

.button-container {
  display: flex;
  gap: 15px;
}

.action-btn {
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}

.edit-btn {
  background-color: #4CAF50;
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn {
  background-color: #e74c3c;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>
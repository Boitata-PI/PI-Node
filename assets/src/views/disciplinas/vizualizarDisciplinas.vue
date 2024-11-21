<template>
  <!-- Conteúdo principal -->
  <main class="view-container">
    <h1>Detalhes da Disciplina</h1>

    <div class="details-container">
      <!-- Informações da Disciplina -->
      <div class="detail-item">
        <strong>Código da Disciplina:</strong>
        <span>{{ disciplina.codigo }}</span>
      </div>
      <div class="detail-item">
        <strong>Nome da Disciplina:</strong>
        <span>{{ disciplina.nome }}</span>
      </div>
      <div class="detail-item">
        <strong>Professor Responsável:</strong>
        <span>{{ disciplina.professor }}</span>
      </div>
      <!-- Botões Editar e Excluir -->
      <div class="button-container">
        <router-link :to="'/editar-disciplina/' + disciplina.codigo">
          <button class="action-btn edit-btn">Editar</button>
        </router-link>
        <button @click="deleteDisciplina" class="action-btn delete-btn">Excluir</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
data() {
  return {
    disciplina: {
      codigo: '',
      nome: '',
      professor: '',
    },
  };
},
mounted() {
  // Simulando a obtenção da disciplina (pode vir de uma API)
  this.disciplina = {
    codigo: '110',
    nome: 'PI',
    professor: 'Cristina',
  };
},
methods: {
  async deleteDisciplina() {
    try {
      alert(`Disciplina ${this.disciplina.nome} excluída com sucesso!`);
      this.$router.push('/disciplinas');
    } catch (error) {
      console.error('Erro ao excluir disciplina:', error);
      alert('Erro ao tentar excluir a disciplina.');
    }
  },
},
};
</script>

<style scoped>
/* Navbar e sidenav mantidos */

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

/* Contêiner das informações e botões Excluir e Editar na mesma linha */
.details-container {
background: #ffffff;
border-radius: 8px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
padding: 20px;
display: flex;
align-items: center; /* Alinha os itens no centro verticalmente */
justify-content: space-between; /* Dá espaçamento entre as informações e os botões */
}

.detail-item {
display: flex;
align-items: center;
justify-content: flex-start;
}

.detail-item strong {
font-size: 16px;
margin-right: 10px;
}

.detail-item span {
font-size: 16px;
color: #666;
}

/* Botões Editar e Excluir */
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
background-color: #4CAF50; /* Cor verde para Editar */
}

.edit-btn:hover {
background-color: #45a049;
}

.delete-btn {
background-color: #e74c3c; /* Cor vermelha para Excluir */
}

.delete-btn:hover {
background-color: #c0392b;
}
</style>


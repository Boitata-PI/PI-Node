<style scoped>
/* Estilos específicos */
</style>
<template> 
  <!-- Conteúdo principal -->
  <main class="view-container">
    <h1>Detalhes do Curso</h1>

    <div class="details-container">
      <!-- Informações do Curso -->
      <div class="detail-item">
        <strong>Código do Curso:</strong>
        <span>{{ curso.codigo }}</span>
      </div>
      <div class="detail-item">
        <strong>Nome do Curso:</strong>
        <span>{{ curso.nome }}</span>
      </div>
      <div class="detail-item">
        <strong>Período:</strong>
        <span>{{ curso.periodo }}</span>
      </div>
      <div class="detail-item">
        <strong>Coordenador:</strong>
        <span>{{ curso.coordenador }}</span>
      </div>
      <!-- Botões Editar e Excluir -->
      <div class="button-container">
        <!-- <router-link :to="'/editarCursos' + curso.codigo">
          <button class="action-btn edit-btn">Editar</button>
        </router-link> -->
        <router-link to="/editarCursos">
          <button class="action-btn edit-btn">Editar</button>
        </router-link>
        <button @click="deleteCurso" class="action-btn delete-btn">Excluir</button>
      </div>
    </div>
  </main>
</template>

<script>

export default {
data() {
  return {
    curso: {
      codigo: '',
      nome: '',
      periodo: '',
      coordenador: '',
    },
  };
},
mounted() {
  // Simulando a obtenção do curso
  this.curso = {
    codigo: '101',
    nome: 'Desenvolvimento Web',
    periodo: 'Noite',
    coordenador: 'Carlos Oliveira',
  };
},
methods: {
  async deleteCurso() {
    try {
      alert(`Curso ${this.curso.nome} excluído com sucesso!`);
      this.$router.push('/index');
    } catch (error) {
      console.error('Erro ao excluir:', error);
      alert('Erro ao tentar excluir o curso.');
    }
  }
}
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


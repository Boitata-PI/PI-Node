<template>
  <!-- Conteúdo Principal -->
  <main class="view-container">
    <h1>Detalhes do Relatório</h1>

    <div class="details-container">
      <div class="detail-item">
        <strong>Código do Relatório:</strong>
        <span>{{ relatorio.codigo }}</span>
      </div>
      <div class="detail-item">
        <strong>Nome do Relatório:</strong>
        <span>{{ relatorio.nome }}</span>
      </div>
      <div class="detail-item">
        <strong>Data de Emissão:</strong>
        <span>{{ relatorio.dataEmissao }}</span>
      </div>
      <!-- Botões de Ação -->
      <button @click="editarRelatorio" class="action-btn edit-btn">Editar</button>
      <button @click="deleteRelatorio" class="action-btn delete-btn">Excluir</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      relatorio: {
        codigo: '',
        nome: '',
        dataEmissao: '',
      },
    };
  },
  mounted() {
    // Simulando a obtenção dos dados do relatório
    this.relatorio = {
      codigo: 'R123',
      nome: 'Relatório de Vendas',
      dataEmissao: '2024-11-15',
    };
  },
  methods: {
    editarRelatorio() {
      this.$router.push("/editar-relatorio"); // Redireciona para a tela de edição
    },
    async deleteRelatorio() {
      try {
        alert(`Relatório ${this.relatorio.nome} excluído com sucesso!`);
        this.$router.push('/relatorios'); // Redireciona para a lista de relatórios
      } catch (error) {
        console.error('Erro ao excluir:', error);
        alert('Erro ao tentar excluir o relatório.');
      }
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
  },
};
</script>

<style scoped>
/* Estilos semelhantes às telas anteriores */
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

.action-btn {
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}

.edit-btn {
  background-color: #3498db;
}

.edit-btn:hover {
  background-color: #2980b9;
}

.delete-btn {
  background-color: #e74c3c;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>

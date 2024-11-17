<template>
  <!-- Conteúdo Principal -->
  <main class="login-container">
    <div class="form-container">
      <h1>Editar Relatório</h1>
      <br>
      <form @submit.prevent="editarRelatorioForm" id="editForm">
        <!-- Campo de Código do Relatório -->
        <label for="codigo">Código do Relatório:</label>
        <input v-model="codigo" type="text" id="codigo" name="codigo" placeholder="Atualize o código" required />

        <!-- Campo de Nome do Relatório -->
        <label for="nome">Nome do Relatório:</label>
        <input v-model="nome" type="text" id="nome" name="nome" placeholder="Atualize o nome do relatório" required />

        <!-- Campo de Data de Emissão -->
        <label for="dataEmissao">Data de Emissão:</label>
        <input v-model="dataEmissao" type="date" id="dataEmissao" name="dataEmissao" required />

        <!-- Botões de Ação -->
        <div class="button-group">
          <button type="submit" class="submit-btn">Salvar Alterações</button>
          <button type="button" class="cancel-btn" @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      codigo: '',
      nome: '',
      dataEmissao: '',
    };
  },
  mounted() {
    // Simulando a obtenção dos dados do relatório
    this.relatorio = {
      codigo: 'R123',
      nome: 'Relatório de Vendas',
      dataEmissao: '2024-11-15',
    };
    this.codigo = this.relatorio.codigo;
    this.nome = this.relatorio.nome;
    this.dataEmissao = this.relatorio.dataEmissao;
  },
  methods: {
    async editarRelatorioForm() {
      const relatorio = {
        codigo: this.codigo,
        nome: this.nome,
        dataEmissao: this.dataEmissao,
      };

      try {
        const response = await fetch("http://localhost:8081/relatorio/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(relatorio),
        });
        const result = await response.json();
        console.log(result);
        this.$router.push("/relatorios"); // Redireciona para a lista de relatórios
      } catch (error) {
        console.error('Erro ao editar relatório:', error);
        alert('Erro ao tentar editar o relatório.');
      }
    },
    cancelEdit() {
      this.$router.push("/relatorios"); // Cancela a edição e volta para a lista
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
/* Estilos semelhantes aos anteriores */
.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 450px;
  width: 100%;
  margin: 30px auto;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.submit-btn,
.cancel-btn {
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  width: 48%;
  display: inline-block;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
}

.submit-btn:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
  border: none;
}

.cancel-btn:hover {
  background-color: #c82333;
  transform: translateY(-2px);
}
</style>
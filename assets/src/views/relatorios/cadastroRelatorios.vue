<template>
  <!-- Conteúdo principal -->
  <main class="form-container">
    <h1>Cadastrar Relatório</h1>
    <form @submit.prevent="cadastrarRelatorio">
      <label for="codigo">Código do Relatório:</label>
      <input v-model="codigo" type="text" id="codigo" name="codigo" placeholder="Informe o código" required />

      <label for="nome">Nome do Relatório:</label>
      <input v-model="nome" type="text" id="nome" name="nome" placeholder="Informe o nome do relatório" required />

      <label for="dataEmissao">Data de Emissão:</label>
      <input v-model="dataEmissao" type="date" id="dataEmissao" name="dataEmissao" required />

      <button type="submit" class="submit-btn">Cadastrar</button>
    </form>
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
  methods: {
    async cadastrarRelatorio() {
      const relatorio = {
        codigo: this.codigo,
        nome: this.nome,
        dataEmissao: this.dataEmissao,
      };
      try {
        const response = await fetch("http://localhost:8081/relatorio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(relatorio),
        });
        const result = await response.json();
        alert(`Relatório ${result.nome} cadastrado com sucesso!`);
        this.$router.push("/relatorios");
      } catch (error) {
        console.error("Erro ao cadastrar relatório:", error);
        alert("Erro ao tentar cadastrar o relatório.");
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
.background-container {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  min-height: 100vh;
  padding: 30px;
}

.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  margin: 50px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.submit-btn:hover {
  background-color: #218838;
}
</style>

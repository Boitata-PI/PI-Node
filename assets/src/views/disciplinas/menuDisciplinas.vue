<template>
  <div class="container mt-5">
    <h2>Lista de Disciplinas</h2>

    <!-- Grid de disciplinas -->
    <div class="disciplinas-grid">
      <router-link 
        v-for="(disciplina, index) in disciplinas" 
        :key="index" 
        :to="{ name: 'DisciplinaDetalhes', params: { id: disciplina.id } }"
        class="disciplina-item"
      >
        <h5>{{ disciplina.nome }}</h5>
        <p>{{ disciplina.descricao }}</p>
      </router-link>
    </div>

  </div>
</template>

<script>

import { searchDisciplinas } from "../../js/requisitions/disciplinas.js";

export default {
  name: "menuDisciplinas",
  data() {
    return {
      disciplinas: [],
    };
  },
  async mounted() {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"))
      this.disciplinas = await searchDisciplinas(userData.id);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
/* Estilização geral */
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  color: #155c55;
  margin-bottom: 20px;
}

/* Grid de disciplinas */
.disciplinas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Itens lado a lado */
  gap: 20px; /* Espaçamento entre itens */
  margin-top: 20px;
}

.disciplina-item {
  padding: 15px;
  background-color: #155c55; /* Cor de fundo verde */
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.disciplina-item:hover {
  transform: translateY(-5px); /* Efeito de hover */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: #0e3c3c; /* Tom mais escuro no hover */
}

.disciplina-item h5 {
  margin-bottom: 10px;
  font-weight: bold;
}

.disciplina-item p {
  font-size: 14px;
  color: #f0f0f0;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  .disciplina-item h5 {
    font-size: 16px;
  }

  .disciplina-item p {
    font-size: 12px;
  }
}
</style>
<template>
  <div class="container mt-5">
    <h2>Lista de Professores</h2>

    <!-- Grid de professores -->
    <div class="professores-grid">
      <router-link 
        v-for="(professor, index) in professores" 
        :key="index" 
        :to="{ name: 'ProfessorDetalhes', params: { id: professor.id } }"
        class="professor-item"
      >
        <h5>{{ professor.nome }}</h5>
        <p>{{ professor.materia }}</p>
      </router-link>
    </div>

    <!-- Botão para adicionar professores -->
    <router-link class="btn-add" to="/cadastroProfessores">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menuProfessores",
  data() {
    return {
      professores: [
        { id: 1, nome: "Cristina", materia: "Ensina: Projeto Integrado" },
        { id: 2, nome: "João", materia: "Ensina: Matemática" },
        { id: 3, nome: "Ana", materia: "Ensina: Física" },
        { id: 4, nome: "Carlos", materia: "Ensina: Química" },
      ],
    };
  },
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

/* Grid de professores */
.professores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Itens lado a lado */
  gap: 20px; /* Espaçamento entre itens */
  margin-top: 20px;
}

.professor-item {
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

.professor-item:hover {
  transform: translateY(-5px); /* Efeito de hover */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: #0e3c3c; /* Tom mais escuro no hover */
}

.professor-item h5 {
  margin-bottom: 10px;
  font-weight: bold;
}

.professor-item p {
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

  .professor-item h5 {
    font-size: 16px;
  }

  .professor-item p {
    font-size: 12px;
  }
}
</style>
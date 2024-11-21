<template>
  <div class="container mt-5">
    <h2>Lista de Cursos</h2>

    <!-- Grid de cursos -->
    <div class="cursos-grid">
      <router-link
        v-for="(curso, index) in cursos" 
        :key="index" 
        :to="{ name: 'CursoDetalhes', params: { id: curso.id } }"
        class="curso-item"
      >
        <h5>{{ curso.nome }}</h5>
        <p>{{ curso.coordenador }}</p>
      </router-link>
    </div>
  </div>

     <!-- Botão para adicionar cursos -->
     <router-link class="btn-add" to="/cadastroCursos">
      <div class="add-task-btn">+</div>
    </router-link>
</template>

<script>
export default {
  name: "menuCursos",
  data() {
    return {
      cursos: [
        { id: 1, nome: "Engenharia de Software", coordenador: "Vendramel" },
        { id: 2, nome: "Ciência da Computação" },
        { id: 3, nome: "Sistemas de Informação" },

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

/* Grid de cursos */
.cursos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Alinha itens lado a lado */
  gap: 15px; /* Espaçamento entre os itens */
}

.curso-item {
  background-color: #155c55;
  color: #ffffff;
  padding: 15px 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.curso-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: #0e3c3c;
}
</style>
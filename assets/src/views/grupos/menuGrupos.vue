<template>
  <div class="menu-grupos container mt-5">
    <h2>Lista de Grupos</h2>
    <div class="grupo-card" v-for="grupo in grupos" :key="grupo.id">
      <h3>{{ grupo.nome }} - Grupo {{ grupo.numero }}</h3>
      <p>{{ grupo.descricao }}</p>
      <router-link :to="{ name: 'GrupoDetalhes', params: { id: grupo.id } }" class="detalhes-link">
        Ver Detalhes
      </router-link>
    </div>
  </div>
  <div>
    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroGrupos">
      <div class="add-task-btn">+</div>
    </router-link>

  </div>


</template>

<script>
export default {
  name: 'MenuGrupos',
  data() {
    return {
      grupos: [
        {
          id: 1,
          nome: 'LittleHost',
          numero: '01',
        },
        {
          id: 2,
          nome: 'BAE Guard',
          numero: '02',
        },
        // Adicione mais grupos conforme necessário
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos semelhantes ao ProfessorDetalhes */
.container {
  background-color: #ffffff;
  border: 1px solid #e1dfdd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px 50px;
  max-width: 600px;
  text-align: center;
  width: 90%;
}

h2 {
  font-size: 28px;
  color: #155c55;
  margin-bottom: 20px;
  text-align: center;
}

.grupo-card {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.grupo-card h3 {
  font-size: 20px;
  color: #155c55;
  margin-bottom: 10px;
  font-weight: bold;
}

.grupo-card p {
  font-size: 16px;
  color: #555555;
  line-height: 1.5;
}


.detalhes-link {
    background-color: #155c55;
    border-radius: 20px;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    transition: color 0.3s ease;
}

.detalhes-link:hover {
    color: #fff;
}
</style>
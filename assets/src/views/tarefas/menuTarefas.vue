<template>
  <!-- Container de tarefas -->
  <div id="main">
    <div class="tasks-container">
      <h4>Cursos</h4>
      <!-- Exemplo de lista de curso -->
      <DisciplinaItem v-for="disciplina in disciplina" :key="disciplina.id" :disciplina="disciplina" />
    </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroDisciplina">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>

</template>


<script>
import DisciplinaItem from '@/components/disciplinaItem/disciplinaItem.vue';

export default {
  name: 'menuTurma'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
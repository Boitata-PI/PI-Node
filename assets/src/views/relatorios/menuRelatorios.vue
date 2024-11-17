<template>
  <!-- Container de tarefas -->
  <div id="main">
    <div class="tasks-container">
      <h4>Relatórios</h4>
      <!-- Exemplo de lista de curso -->
      <DisciplinaItem v-for="disciplina in disciplina" :key="disciplina.id" :disciplina="disciplina" />

      <div class="container mt-5">
          <div class="group-item">
            <h5>Victor</h5>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique
              auguerhoncus at.</p>
          </div>
          <div class="group-item">
            <h5>Roma</h5>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique
              auguerhoncus at.</p>
          </div>
        </div>

    </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroRelatorios">
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
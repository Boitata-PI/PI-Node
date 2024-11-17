<template>
  <!-- Container de tarefas -->
  <div id="main">
    <div class="tasks-container">
      <h4>Professores</h4>
      <!-- Exemplo de lista de curso -->
      <ProfessorItem v-for="professor in preofessor" :key="professor.id" :professor="professor" />

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
    <router-link class="btn-branco" to="/cadastroProfessores">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>

</template>


<script>
// import ProfessorItem from '@/components/professorItem/professorItem.vue';

export default {
  name: 'menuTurma'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
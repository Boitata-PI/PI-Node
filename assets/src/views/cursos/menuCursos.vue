<template>
  <!-- Container de tarefas -->
  <div id="main">
    <div class="tasks-container">
      <h4>Cursos</h4>
      <!-- Exemplo de lista de curso -->
      <CursoItem v-for="curso in curso" :key="curso.id" :curso="curso" />

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
    <router-link class="btn-branco" to="/cadastroCursos">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>

</template>


<script>
export default {
name: 'menuCursos'
};
</script>
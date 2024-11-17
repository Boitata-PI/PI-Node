<template>
  <!-- Container de grupos -->
  <div class="container mt-5">
    <h4>Grupos</h4>
    <div class="group-item">
      <h5>LittleHost - Grupo 01</h5>
      <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique
        auguerhoncus at.</p>
    </div>
    <div class="group-item">
      <h5>BAE Guard - Grupo 02</h5>
      <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique augue
        rhoncus at.</p>
    </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroGrupos">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>


</template>

<script>
export default {
  name: 'Grupos'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
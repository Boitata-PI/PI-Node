<template>
  <section>
  <!-- Menu lateral (sidenav) -->
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <router-link to="/turmas">Turmas</router-link>
    <router-link to="/cursos">Curso</router-link>
  </div>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" @click="openNav">&#9776;</button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/turmas">Curso</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cursos">Turmas</router-link>
        </li>
      </ul>
    </div>
    <div class="user-icon"><router-link class="nav-link" to="/registro"></router-link></div>
  </nav>
</section>

  <section class="cardcontainer">
      <div class="card-container">
        <router-link class="nav-link" to="/cadastroCurso">
          <div class="card">
            Curso
          </div>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuCadastro'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
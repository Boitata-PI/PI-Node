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
            <router-link class="nav-link" to="/cursos">Curso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/turmas">Turmas</router-link>
          </li>
        </ul>
      </div>
      <router-link class="nav-link" to="/registro"><div class="user-icon"></div></router-link>
    </nav>
</section>


  <section class="cardcontainer">
      <div class="card-container">
        <router-link class="nav-link" to="/grupos">
          <div class="card">
            Grupo
          </div>
        </router-link>
        <router-link class="nav-link" to="/alunos">
          <div class="card">
            Alunos
          </div>
        </router-link> 
    </div>
  </section>
</template>


<script>
export default {
  name: 'menuTurma'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
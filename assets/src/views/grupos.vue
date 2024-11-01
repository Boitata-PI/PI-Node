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

  <!-- Container de grupos -->
  <div class="container mt-5">
    <h4>Grupos</h4>
    <div class="group-item">
      <h5>LittleHost - Grupo 01</h5>
      <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique augue rhoncus at.</p>
    </div>
    <div class="group-item">
      <h5>BAE Guard - Grupo 02</h5>
      <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique augue rhoncus at.</p>
    </div>
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
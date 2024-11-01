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


  <!-- Container de Turmas -->
  <div class="turma-container">
    <h2>Turmas</h2>
    <!-- <div class="turma-card">
      <div class="turma-info">
        <h3>TURMA 01 <span>(06302)</span></h3>
        <div class="tags">
          <span class="tag">MANHÃ</span>
          <span class="tag">1º SEMESTRE</span>
        </div>
      </div>
      <div class="ver-mais">
        <a class="btn-branco" href="/alunos"><button class="ver-mais-btn">VER MAIS</button></a>
      </div>
    </div> -->
  </div>

    <!-- Botão para adicionar tarefa -->
    <!-- <a class="btn-branco" href="/menuTurmas"><div class="add-task-btn">+</div></a> -->

</template>

<script>
export default {
  name: 'turmas'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
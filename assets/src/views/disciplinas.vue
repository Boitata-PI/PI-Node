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

  <!-- Container de Disciplinas -->
  <div class="turma-container">
    <h2>Disciplinas</h2>
  </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" id="addButton" to="/cadastroDisciplina"><div class="add-task-btn">+</div></router-link>

</template>

<script>
export default {
  name: 'Disciplinas'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
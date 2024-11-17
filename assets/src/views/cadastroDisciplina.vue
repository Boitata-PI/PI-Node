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

  <main class="login-container">
    <h1>Adicionar Disciplina</h1>

    <div class="form-container">
        <form id="regForm">
            <label for="name">Nome da Disciplina:</label>
            <input type="text" id="nameDisciplina" name="nameDisciplina" placeholder="Insira o nome da Disciplina">


            <label for="coordenador">Professor Responsável:</label>
            <select id="coordenador" name="coordenador">
              <option value="">Selecione o Professor Responsável</option>
            </select>


            <button type="submit" class="submit-btn">Cadastrar</button>
        </form>
    </div>
</main>

 </template>
 
 <script>
 export default {
   name: 'CadastroDisciplina'
 };
 </script>
 
 <style scoped>
 /* Estilos específicos */
 </style>
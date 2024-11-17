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
    <h1>Adicionar Curso</h1>

    <div class="form-container">
        <form @submit="cadCurso" id="regForm">
            <label for="name">Nome do Curso:</label>
            <input type="text" id="namecurso" name="namecurso" placeholder="Insira o nome do Curso">


            <label for="periodo">Periodo:</label>
            <select id="periodo" name="periodo">
              <option value="">Selecione o Periodo</option>
              <option value="coordenador1">Manhã </option>
              <option value="coordenador2">Tarde</option>
              <option value="coordenador3">Noite</option>
            </select>


            <label for="coordenador">Nome do Coordenador:</label>
            <select id="coordenador" name="coordenador">
              <option value="">Selecione o Coordenador</option>
            </select>

            <button type="submit" class="submit-btn">Cadastrar</button>
        </form>
    </div>
</main>
</template>

<script>
import { fetchProfessor, insertSelect, cadCurso } from "../js/requisitions/cadastroCurso";

export default {
  name: 'CadastroCurso',
  methods: {
    fetchProfessor,
    insertSelect,
    cadCurso
  },
  mounted() {
    this.fetchProfessor();
  }
};
</script>

<style scoped>
/* Estilos específicos */
</style>
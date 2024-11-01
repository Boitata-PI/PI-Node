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

  <!-- Container de Turmas -->
  <div class="turma-container">
    <h2>Cursos</h2>

    <div v-for="turma in turmas" :key="turma.id" class="turma-card">
      <div class="turma-info">
        <h3>{{ turma.nome }}
          <span>(06302)</span>
        </h3>
        <div class="tags">
          <div class="tag">MANHÃ</div>
          <div class="tag">1º SEMESTRE</div>
        </div>
      </div>
      <div class="ver-mais">
        <a class="btn-branco" @click="irParaDisciplinas(turma.id)">
          <button class="ver-mais-btn">VER MAIS</button>
        </a>
      </div>
    </div>

  </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroCurso"><div class="add-task-btn">+</div></router-link>

 </template>
 
 <script>

 export default {
   name: 'Cursos',
    data() {
      return {
        turmas: []
      }
    },
    methods: {
      async fetchTurmas(){
        try {
          
          const response = await fetch("http://localhost:8081/curso/search", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              codCord: 2,
            }),
          })
          const result = await response.json();
          this.turmas = result.data;
          console.log(turmas);
          turmas.forEach((turma) => {
            createRow(turma);
          });
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted() {
      this.fetchTurmas();
    }
 };
 </script>
 
 <style scoped>
 /* Estilos específicos */
 </style>
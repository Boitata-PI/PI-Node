<template>
  <div>
    <!-- Menu lateral (sidenav) -->
    <div id="mySidenav" class="sidenav">
      <!--Links Gerais sidenav-->
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <router-link to="/menuAlunos">Alunos</router-link>
      <router-link to="/menuCursos">Curso</router-link>
      <router-link to="/menuDisciplinas">Disciplinas</router-link>
      <router-link to="/menuGrupos">Grupos</router-link>
      <router-link to="/menuProfessores">Professores</router-link>
      <router-link to="/menuRelatorios">Relatorios</router-link>
      <router-link to="/menuTarefas">Tarefas</router-link>
      <router-link to="/index">Dashboard</router-link>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" @click="openNav">
        ☰
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <!--Links Gerais-->

          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarAlunos">Alunos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarCursos">Curso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarDisciplinas">Disciplinas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarGrupos">Grupos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarProfessores">Professores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarRelatorios">Relatórios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vizualizarTarefas">Tarefas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index">Dashboard</router-link>
          </li>
        </ul>
      </div>
      <router-link class="nav-link" to="/"><div class="user-icon"></div></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
  },
};
</script>

<style scoped>
/* Estilos para o Navbar */
.navbar {
  background-color: #09332F;
  padding: 10px;
}

.navbar-brand,
.nav-link {
  color: #fff !important;
  font-weight: bold;
}

.navbar-toggler {
  border: none;
  color: #fff !important;
}

.navbar-toggler-icon {
  color: #fff;
}

.user-icon {
  width: 35px;
  height: 35px;
  background-color: #ddd;
  border-radius: 50%;
}


/*SIDE--NAVBAR*/
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #194743;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 10px 10px 10px 30px;
  font-size: 20px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  background-color: #43837d;
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 36px;
  margin-left: 50px;
  color: white;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}
</style>
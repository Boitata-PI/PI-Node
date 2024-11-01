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

    <!-- Container de tarefas -->
    <div id="main">
      <div class="tasks-container">
        <h4>Alunos da Turma</h4>
        <!-- Exemplo de lista de alunos -->
        <AlunoItem v-for="aluno in alunos" :key="aluno.id" :aluno="aluno" />
      </div>

      <!-- Botão para adicionar tarefa -->
      <router-link class="btn-branco" to="/assets/src/views/CadastroAluno.vue">
        <div class="add-task-btn">+</div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Alunos',
  data() {
    return {
      alunos: []
    }
  },
  methods: {
    async fetchAlunos() {
        try {
            const response = await fetch("http://localhost:8081/alunoDisc/search",{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    codDisc: sessionStorage.getItem("codDisc"),
                })
            });
            const result = await response.json();
            this.alunos = result.data.map((item) => item.Usuario);
            console.log(alunos);
            alunos.forEach((aluno) => {
                createRow(aluno);
            });
        } catch (error) {
            console.error(error);
        }
    }
  },
  mounted() {
    this.fetchAlunos();
  }
};
</script>
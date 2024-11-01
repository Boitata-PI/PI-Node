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


  <main class="login-container">
    <h1>Adicionar Aluno</h1>
    <p>Adicione manualmente ou importe um arquivo</p>

    <div class="form-container">
        <form id="regForm">
            <label for="rm">RM:</label>
            <input type="text" id="rm" name="rm" placeholder="Insira o RM">

            <label for="name">Nome completo:</label>
            <input type="text" id="name" name="name" placeholder="Insira o nome completo">

            <button type="submit" class="submit-btn">Cadastrar</button>

            

        </form>
        <form id="anexForm">
          <div class="buttons">
              <button type="submit" class="attach-btn">Anexo</button>
              <hr>
              <label for="arquivo">Selecione um arquivo:</label>
              <input class="submit-btn" type="file" id="arquivo" name="arquivo">
          </div>

        </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      ra: '',
    };
  },
  methods: {
    async cadAlunoForm() {
      const reg = {
        nome: this.nome,
        ra: this.ra,
        codDisc: sessionStorage.getItem("codDisc"),
      };

      try {
        const response = await fetch("http://localhost:8081/alunoDisc/store", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reg),
        });
        const result = await response.json();
        console.log(result);
        this.$router.push("/alunos");
      } catch (error) {
        console.error(error);
      }
    },
    async cadAlunoAnex() {
      const formData = new FormData();
      formData.append("codDisc", sessionStorage.getItem("codDisc"));
      formData.append("alunos", this.$refs.arquivo.files[0]);

      try {
        const response = await fetch("http://localhost:8081/alunoDisc/store", {
          method: "post",
          body: formData,
        });
        const result = await response.json();
        console.log(result);
        this.$router.push("/alunos");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos */
</style>
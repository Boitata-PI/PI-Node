<script setup>

import AlunoItem from '@/components/alunoItem/alunoItem.vue';

</script>


<template>
  <section>
    <!-- Container de tarefas -->
    <div id="main">
      <div class="tasks-container">
        <h4>Alunos da Turma</h4>
        <!-- Exemplo de lista de alunos -->
        <AlunoItem v-for="aluno in alunos" :key="aluno.id" :aluno="aluno" />

        <div class="container mt-5">
          <div class="group-item">
            <h5>Victor</h5>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique
              auguerhoncus at.</p>
          </div>
          <div class="group-item">
            <h5>Roma</h5>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ipsum felis, non tristique
              auguerhoncus at.</p>
          </div>
        </div>

      </div>

      <!-- Botão para adicionar tarefa -->
      <router-link class="btn-branco" to="/cadastroAlunos">
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
        console.log(sessionStorage.getItem("codDisc"));

        const response = await fetch("http://localhost:8081/alunoDisc/search", {
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
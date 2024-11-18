<template>
  <div class="container mt-5">
    <h4>Alunos</h4>

    <!-- Grid de alunos -->
    <div class="alunos-grid">
      <router-link
        v-for="(aluno, index) in alunos"
        :key="index"
        :to="{ name: 'AlunoDetalhes', params: { id: aluno.id } }"
        class="group-item card shadow"
      >
        <h5>{{ aluno.nome }}</h5>
        <p>RA: {{ aluno.ra }}</p>
      </router-link>
    </div>

    <!-- Botão para adicionar aluno -->
    <router-link class="btn-branco" to="/cadastroAlunos">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menuAlunos',
  data() {
    return {
      alunos: [
        { id: 1, nome: 'João Silva', ra: '20231001' },
        { id: 2, nome: 'Maria Oliveira', ra: '20231002' },
        { id: 3, nome: 'Carlos Santos', ra: '20231003' },
        { id: 4, nome: 'Ana Beatriz', ra: '20231004' }
      ]
    };
  }
};
</script>

<style scoped>
.alunos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.group-item {
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.group-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
<template>
  <div class="container mt-5">
    <h4>Alunos</h4>

    <!-- Grid de alunos -->
    <div class="alunos-grid">
      <router-link v-for="(aluno, index) in alunos" :key="index"
        :to="{ name: 'AlunoDetalhes', params: { id: aluno.id } }" class="group-item card shadow">
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
        { id: 2, nome: 'Carlos Santos', ra: '20231003' },
        { id: 3, nome: 'Maria Oliveira', ra: '20231002' },
        { id: 4, nome: 'Ana Beatriz', ra: '20231004' },
        { id: 5, nome: 'Lucas Pereira', ra: '20231005' },
        { id: 6, nome: 'Beatriz Souza', ra: '20231006' },
        { id: 7, nome: 'Paulo Henrique', ra: '20231007' },
        { id: 8, nome: 'Clara Medeiros', ra: '20231008' },
        { id: 9, nome: 'Renato Lima', ra: '20231009' },
        { id: 10, nome: 'Juliana Costa', ra: '20231010' },
        { id: 11, nome: 'Gabriel Almeida', ra: '20231011' },
        { id: 12, nome: 'Roberta Farias', ra: '20231012' },
        { id: 13, nome: 'Ricardo Gonçalves', ra: '20231013' },
        { id: 14, nome: 'Laura Martins', ra: '20231014' },
        { id: 15, nome: 'Fernando Ribeiro', ra: '20231015' },
        { id: 16, nome: 'Isabela Rocha', ra: '20231016' },
        { id: 17, nome: 'André Moreira', ra: '20231017' },
        { id: 18, nome: 'Fernanda Lima', ra: '20231018' },
        { id: 19, nome: 'Rafael Monteiro', ra: '20231019' },
        { id: 20, nome: 'Eduarda Nascimento', ra: '20231020' }
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
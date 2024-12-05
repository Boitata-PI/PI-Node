<template>
  <section class="card-section">
    <div class="card-container">
      <router-link class="nav-link" to="/menuCursos" v-if="user.Cursos.length > 0">
        <div class="card">
          <h3>Cursos</h3>
          <p>Acompanhe os cursos disponíveis no sistema.</p>
        </div>
      </router-link>
      <router-link class="nav-link" to="/menuDisciplinas">
        <div class="card">
          <h3>Disciplina</h3>
          <p>Confira as disciplinas da sua turma.</p>
        </div>
      </router-link>
      <router-link class="nav-link" to="/menuProfessores" v-if="user.tipo === 'PROFESSOR'">
        <div class="card">
          <h3>Professores</h3>
          <p>Confira os professores que já estão no sistema.</p>
        </div>
      </router-link>
    </div>
  </section>


  <section class="card-section">
    <div class="card-container">
      <router-link class="nav-link" to="/pagDesenvolvimento" v-if="user.tipo === 'PROFESSOR'">
        <div class="card">
          <h3>Relatório</h3>
          <p>Acompanhe o progresso e os detalhes dos projetos.</p>
        </div>
      </router-link>
      <router-link class="nav-link" to="/menuTarefas" v-if="user.tipo === 'ALUNO'">
        <div class="card">
          <h3>Tarefas</h3>
          <p>Acompanhe o progresso e os detalhes dos Tarefas.</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('userData'))
    };
  }
};

</script>

<style scoped>
/* Estrutura básica */
.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

/* Cartões */
.card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Texto do Card */
.card h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #333;
}

.card p {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

/* Links */
.nav-link {
  text-decoration: none;
}

/* Ajuste responsivo */
@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 350px;
  }
}
</style>
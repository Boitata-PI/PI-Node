<template>
  <div class="container mt-5">
    <h2>Detalhes do Aluno: {{ aluno.nome }}</h2>

    <!-- Abas -->
    <div class="tabs">
      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === tab }" @click="activeTab = tab">
        {{ tab }}
      </button>
    </div>

    <!-- Conteúdo das Abas -->
    <div class="tab-content">
      <div v-if="activeTab === 'Detalhes'">
        <h4>Informações Gerais</h4>
        <ul>
          <li><strong>Matrícula:</strong> {{ aluno.ra }}</li>
          <li><strong>Email:</strong> {{ aluno.email }}</li>
        </ul>
      </div>

      <div v-if="activeTab === 'Grupos'">
        <h4>Grupos</h4>
        <ul>
          <li v-for="grupo in grupos" :key="grupo.Grupo.id" @click="navigateToGrupo(grupo.Grupo.id)"
            style="cursor: pointer; color: #155c55;">
            {{ grupo.Grupo.nome }}
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'Notas'">
        <h4>Notas</h4>
        <ul>
          <li v-for="(nota, index) in aluno.notas" :key="index">
            {{ nota.disciplina }}: {{ nota.nota }}
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'Ações'">
        <div class="button-container">
          <!-- Botão Editar -->
            <button class="action-btn edit-btn" @click="editButton()">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a1.5 1.5 0 0 1 0 2.121L14.121 5.44l-3.293-3.293 1.38-1.38a1.5 1.5 0 0 1 2.121 0l1.173 1.173ZM1 13.293V16h2.707L13.44 6.268l-3.293-3.293L1 13.293Z" />
              </svg>
              Editar
            </button>

          <!-- Botão Excluir -->
          <button @click="handleDeleteAluno()" class="action-btn delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7ZM3 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5V4H3v-.5Zm5-1.5a1 1 0 0 1 1 1H7a1 1 0 0 1 1-1Zm-2.5 1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 2 3.5v-1A.5.5 0 0 1 2.5 2h3a.5.5 0 0 1 .5.5v1Z" />
            </svg>
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { findAluno, deleteAluno } from '@/js/requisitions/users';
import { searchGruposAluno } from '@/js/requisitions/grupos';

export default {
  name: 'AlunoDetalhes',
  props: ['id'],
  data() {
    return {
      tabs: ['Ações', 'Grupos', 'Detalhes'], // Abas
      activeTab: 'Ações', // Aba ativa por padrão
      aluno: {},
      grupos: []
    };
  },
  methods: {
    findAluno,
    searchGruposAluno,
    async handleDeleteAluno() {

      try {
        await deleteAluno(this.aluno.id);
        this.$router.back();
      } catch (error) {
        console.error('Erro ao excluir aluno:', error);
      }
      
    },
    navigateToGrupo(grupoId) {
      this.$router.push({ name: 'GrupoDetalhes', params: { id: grupoId } });
    },
    editButton() {
      localStorage.setItem("aluno", this.aluno.id);
      this.$router.push("/editarAlunos");
    }
  },
  async mounted() {
    try {
      this.aluno = await this.findAluno(this.id);
      this.grupos = await this.searchGruposAluno(this.id);
    } catch (error) {
      console.error('Erro ao buscar aluno:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos Globais */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f3f2f1;
  color: #323130;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Container */
.container {
  background-color: #ffffff;
  border: 1px solid #e1dfdd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px 50px;
  max-width: 600px;
  text-align: center;
  width: 90%;
}

/* Títulos */
h2 {
  font-size: 28px;
  color: #155c55;
  margin-bottom: 20px;
}

h4 {
  font-size: 20px;
  color: #323130;
  margin-bottom: 10px;
  text-align: center;
}

/* Abas */
.tabs {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e1dfdd;
  margin-bottom: 20px;
  gap: 15px;
}

.tabs button {
  background: none;
  border: none;
  font-size: 16px;
  color: #605e5c;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: 2px solid transparent;
}

.tabs button:hover {
  color: #155c55;
}

.tabs button.active {
  color: #155c55;
  font-weight: bold;
  border-bottom: 2px solid #155c55;
}

/* Conteúdo das Abas */
.tab-content {
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  font-size: 16px;
  color: #323130;
  background-color: #f9f9f9;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

ul li:hover {
  background-color: #e6f7f1;
  transform: translateY(-2px);
}


ul li::before {
  content: '';
  width: 30px;
  height: 30px;
  background-color: #28a745;
  border-radius: 2px;
  display: inline-block;
}

/* Responsividade */
@media (max-width: 768px) {
  ul li {
    font-size: 14px;
    padding: 8px 12px;
  }
}


/* Responsividade */
@media (max-width: 768px) {
  .container {
    padding: 20px 30px;
  }

  h2 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
  }

  ul li {
    font-size: 14px;
  }
}

/* Botões Editar e Excluir */
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.action-btn {
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.edit-btn {
  background-color: #28a745;
  color: white;
}

.edit-btn:hover {
  background-color: #218838;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.delete-btn:hover {
  background-color: #c82333;
}

/* Estilo dos ícones dentro dos botões */
.action-btn svg {
  width: 20px;
  height: 20px;
  fill: white;
}
</style>
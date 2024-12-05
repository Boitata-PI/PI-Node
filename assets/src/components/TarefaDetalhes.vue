<template>
  <div class="container mt-5">
    <h2>Tarefas Entregues: {{ disciplina.nome }}</h2>

    <!-- Abas -->
    <div class="tabs">
      <button
        v-for="tab in tabs[user.tipo]"
        :key="tab"
        :class="{ active: activeTab[user.tipo] === tab }"
        @click="activeTab[user.tipo] = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Conteúdo das Abas -->
    <div class="tab-content">
      <!-- Ações -->
      <div v-if="activeTab[user.tipo] === 'Ações'" class="button-container">
        <button
          @click="editButton"
          class="action-btn edit-btn"
          v-if="user.tipo === 'PROFESSOR'"
        >
          Editar
        </button>
        <button
          @click="handleDelete"
          class="action-btn delete-btn"
          v-if="user.tipo === 'PROFESSOR'"
        >
          Excluir
        </button>
      </div>

      <!-- Tarefas Entregues -->
      <div v-else-if="activeTab[user.tipo] === 'Entregue'">
        <ul>
          <li
            v-for="tarefa in tarefas"
            :key="tarefa.id"
            @click="navigateToTarefas(tarefa.id)"
            class="list-item"
          >
            {{ tarefa.nome }}
          </li>
        </ul>
      </div>

      <!-- Tarefas Não Entregues -->
      <div v-else-if="activeTab[user.tipo] === 'Não Entregue'">
        <ul>
          <li
            v-for="aluno in alunos"
            :key="aluno.Usuario.id"
            class="list-item"
          >
            {{ aluno.Usuario.nome }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { findDisciplinas, deleteDisciplinas } from "../js/requisitions/disciplinas";
import { searchAlunosDisc } from "../js/requisitions/users.js";
import { searchTarefas, deleteTarefa } from "../js/requisitions/tarefas.js";

export default {
  name: "TarefaDetalhes",
  data() {
    return {
      tabs: {
        PROFESSOR: ["Ações", "Entregue", "Não Entregue"],
        ALUNO: ["Entregue", "Não Entregue"],
      },
      activeTab: {
        PROFESSOR: "Ações",
        ALUNO: "Entregue",
      },
      disciplina: {},
      alunos: [],
      tarefas: [],
      user: {},
    };
  },
  methods: {
    async handleDelete() {
      try {
        await deleteDisciplinas(this.disciplina.id);
        this.$router.push("/index");
      } catch (error) {
        console.error("Erro ao excluir a disciplina:", error);
      }
    },
    editButton() {
      this.$router.push({ name: "editarDisciplinas", params: { id: this.disciplina.id } });
    },
    navigateToTarefas(id) {
      this.$router.push({ name: "TarefaDetalhes", params: { id } });
    },
  },
  async mounted() {
    try {
      this.user = JSON.parse(localStorage.getItem("userData"));
      this.disciplina = await findDisciplinas(this.$route.params.id);
      this.alunos = await searchAlunosDisc(this.$route.params.id);
      this.tarefas = await searchTarefas(this.$route.params.id);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  },
};
</script>

<style scoped>
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

.confirm-btn {
  padding: 2px 10px;
  margin-bottom: 10px;
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

.delete-icon-btn {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;
  padding: 5px;
  border-radius: 5px;
}

.delete-icon-btn:hover {
  color: #c82333;
  transform: scale(1.1);
}

.delete-icon-btn svg {
  width: 20px;
  height: 20px;
}
</style>
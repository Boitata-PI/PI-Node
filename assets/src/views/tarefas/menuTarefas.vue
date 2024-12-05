<template>
  <div class="container mt-5 menu-tarefas">
    <!-- Navegação por status -->
    <div class="status-tabs">
      <button 
        v-for="(tab, index) in abas" 
        :key="index" 
        :class="{ active: tab === abaAtiva }" 
        @click="abaAtiva = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Lista de Tarefas -->
    <div class="tarefas-lista">
      <router-link 
        v-for="tarefa in tarefasFiltradas" 
        :key="tarefa.id" 
        :to="{ name: 'TarefaDetalhes', params: { id: tarefa.id } }"
        class="tarefa-item"
      >
        <div class="tarefa-header">
          <div>
            <h5>{{ tarefa.nome }}</h5>
            <p>{{ 'Prazo de entrega às '+formatarHora(tarefa.dataVencimento) }}</p>
          </div>
        </div>
        <div class="tarefa-footer">
          <p><strong>Data de vencimento:</strong> {{ formatarData(tarefa.dataVencimento) }}</p>
          <p><strong>Data de fechamento:</strong> {{ formatarData(tarefa.dataFechamento) }}</p>
          <p>{{ tarefa.Disciplina.nome }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import { listTarefas, searchTarefas, searchEntregas } from '../../js/requisitions/tarefas';
import { searchGruposAluno } from '../../js/requisitions/grupos';

export default {
  name: 'menuTarefas',
  data() {
    return {
      abaAtiva: 'Em breve', 
      abas: ['Em breve', 'Em atraso', 'Concluída'], 
      todasTarefas: [], 
      tarefasFiltradas: [],
      grupos: [],
    };
  },
  methods: {
    formatarData(dataISO) {
      const data = new Date(dataISO); // Converte para objeto Date
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    },
    formatarHora(dataISO) {
      const data = new Date(dataISO); // Converte para objeto Date
      return data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    },
    async definirStatus(tarefa) {

      const dataAtual = new Date();
      const vencimento = new Date(tarefa.dataVencimento);
      const fechamento = new Date(tarefa.dataFechamento);


      const entregasPorGrupo = await Promise.all(
        this.grupos.map(grupo => searchEntregas(tarefa.id, grupo.Grupo.id))
      );

      // Verifica se alguma entrega foi feita
      if (entregasPorGrupo.some(entregas => entregas.length > 0)) {
        return "Concluída";
      }

      if (dataAtual < vencimento) {
        return "Em breve";
      } else if (dataAtual < fechamento) {
        return "Em atraso";
      } else {
        return "Concluída";
      }
    },
    filtrarTarefas() {
      this.tarefasFiltradas = this.todasTarefas.filter((tarefa) => {
        return tarefa.status === this.abaAtiva;
      });
    }
  },
  async mounted() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    this.grupos = await searchGruposAluno(userData.id);

    await userData.AlunoDiscs.forEach(async (alunoDisc) => {
      console.log(alunoDisc.codDisc)
      this.todasTarefas.push(...await searchTarefas(alunoDisc.codDisc));
    })

    // tempo de duzentos ms
    await new Promise(resolve => setTimeout(resolve, 200));

    this.todasTarefas.forEach(async (tarefa) => {
      tarefa.status = await this.definirStatus(tarefa);
      console.log("Status: ",tarefa.nome,tarefa.status);
    });

    console.log(this.todasTarefas);
    await new Promise(resolve => setTimeout(resolve, 200));

    this.filtrarTarefas();

    console.log(this.todasTarefas);

  },
  watch: {
    abaAtiva() {
      this.filtrarTarefas();
    }
  }
};
</script>

<style scoped>
/* Layout principal */
.menu-tarefas {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo das abas */
.status-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 1px solid #444;
}

.status-tabs button {
  background: none;
  border: none;
  padding: 10px 20px;
  color: #155c55;
  cursor: pointer;
  transition: color 0.3s ease;
}

.status-tabs button.active {
  color: #155c55;
  font-weight: bold;
  border-bottom: 2px solid #155c55;
}

.status-tabs button:hover {
  color: #0f7e73;
}

/* Lista de tarefas */
.tarefas-lista {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tarefa-item {
  background-color: #fcfcfc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.tarefa-header {
  display: flex;
  gap: 15px;
  align-items: center;
}

.logo-tarefa {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
}

.tarefa-header h5 {
  font-size: 18px;
  margin: 0;
  color: #155c55;
}

.tarefa-header p {
  font-size: 14px;
  color: #000;
}

.tarefa-footer {
  font-size: 14px;
  color: #000;
}

.tarefa-footer strong {
  color: #155c55;
}

a{
    text-decoration: none;
}

</style>
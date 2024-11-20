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
        v-for="(tarefa, index) in tarefasFiltradas" 
        :key="index" 
        :to="{ name: 'TarefaDetalhes', params: { id: tarefa.id } }"
        class="tarefa-item"
      >
        <div class="tarefa-header">
          <div>
            <h5>{{ tarefa.titulo }}</h5>
            <p>{{ tarefa.descricao }}</p>
          </div>
        </div>
        <div class="tarefa-footer">
          <p><strong>Prazo de entrega:</strong> {{ tarefa.prazo }}</p>
          <p>{{ tarefa.materia }}</p>
        </div>
      </router-link>
      <!-- Mensagem quando não houver tarefas -->
      <p v-if="tarefasFiltradas.length === 0" class="sem-tarefas">
        Nenhuma tarefa encontrada nesta aba.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuTarefas',
  data() {
    return {
      abaAtiva: 'Em breve', // Aba ativa
      abas: ['Em breve', 'Em atraso', 'Concluída'], // Abas disponíveis
      tarefas: [
        {
          id: 1,
          titulo: 'Projeto Web/App',
          descricao: 'Prazo de entrega às 23:59',
          prazo: '25 de nov. - segunda-feira',
          materia: 'Técnicas Avançadas de Programação Web e Mobile - A929-N-ADS AMS-111-20240',
          status: 'Em breve',
        },
        {
          id: 2,
          titulo: 'Apresentação - System Calls',
          descricao: 'Prazo de entrega às 23:59',
          prazo: '29 de nov. - sexta-feira',
          materia: 'O.C.S.O. - A929-N-ADS AMS-111-20240',
          status: 'Em breve',
        },
        // Tarefas em atraso
        {
          id: 3,
          titulo: 'Revisão de Algoritmos',
          descricao: 'Prazo de entrega expirado.',
          prazo: '22 de nov. - quarta-feira',
          materia: 'Estrutura de Dados - A929-N-ADS AMS-111-20240',
          status: 'Em atraso',
        },
        {
          id: 4,
          titulo: 'Trabalho Final de Banco de Dados',
          descricao: 'Prazo de entrega expirado.',
          prazo: '20 de nov. - segunda-feira',
          materia: 'Banco de Dados Avançado - A929-N-ADS AMS-111-20240',
          status: 'Em atraso',
        },
        // Tarefas concluídas
        {
          id: 5,
          titulo: 'Implementação de API',
          descricao: 'Entregue antes do prazo.',
          prazo: '18 de nov. - sábado',
          materia: 'Desenvolvimento Back-End - A929-N-ADS AMS-111-20240',
          status: 'Concluída',
        },
        {
          id: 6,
          titulo: 'Design de Interface',
          descricao: 'Entregue antes do prazo.',
          prazo: '15 de nov. - quarta-feira',
          materia: 'UX/UI Design - A929-N-ADS AMS-111-20240',
          status: 'Concluída',
        }
      ]
    };
  },
  computed: {
    tarefasFiltradas() {
      return this.tarefas.filter((tarefa) => tarefa.status === this.abaAtiva);
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
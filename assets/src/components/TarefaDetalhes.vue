<template>
  <div class="container tarefa-detalhes">
    <!-- Cabeçalho com título e voltar -->
    <div class="header">
      <router-link to="/" class="voltar">Voltar</router-link>
      <h1>{{ tarefa.titulo }}</h1>
    </div>

    <!-- Detalhes da tarefa -->
    <div class="tarefa-card">
      <div class="informacoes">
        <p><strong>Prazo:</strong> <span class="data">{{ tarefa.prazo }}</span></p>
        <p><strong>Matéria:</strong> <span>{{ tarefa.materia }}</span></p>
      </div>

      <h4>Instruções:</h4>
      <ul>
        <li v-for="(instrucao, index) in tarefa.instrucoes" :key="index">
          {{ instrucao }}
        </li>
      </ul>

      <!-- Ação para entrega -->
      <div class="tarefa-acoes">
        <button @click="entregarTarefa" class="btn-entregar">Entregar Tarefa</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarefaDetalhes',
  data() {
    return {
      tarefa: {
        id: 1,
        titulo: 'Projeto Web/App',
        prazo: '25 de nov. - segunda-feira',
        materia: 'Técnicas Avançadas de Programação Web e Mobile - A929-N-ADS AMS-111-20240',
        instrucoes: [
          'Bootstrap/Tailwind',
          'Node.js (Express, Express-handlebars e body-parser)',
          'Firebase Firestore'
        ]
      }
    };
  },
  methods: {
    entregarTarefa() {
      alert('Tarefa entregue!');
    }
  }
};
</script>

<style scoped>
/* Container principal */
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fa;
  border-radius: 10px;
}

/* Cabeçalho */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #e1e4e8;
  padding-bottom: 15px;
}

.header h1 {
  font-size: 36px;
  color: #43837d;  /* Ajustado para o verde */
  font-weight: 600;
  margin: 0;
}

.voltar {
  color: #43837d;  /* Ajustado para o verde */
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
}

.voltar:hover {
  text-decoration: underline;
}

/* Detalhes da tarefa */
.tarefa-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #43837d;  /* Ajustado para o verde */
}

.informacoes p {
  font-size: 18px;
  color: #3c4043;
  margin: 10px 0;
}

.informacoes .data {
  font-weight: 600;
  color: #ff7043;
}

h4 {
  font-size: 24px;
  color: #43837d;  /* Ajustado para o verde */
  margin-top: 25px;
  font-weight: 600;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  font-size: 16px;
  color: #5f6368;
  background-color: #f5f5f5;
  padding: 12px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

ul li:hover {
  background-color: #e3f2fd;
  transform: translateY(-4px);
}

ul li::before {
  content: '';
  width: 30px;
  height: 30px;
  background-color: #43837d;  /* Ajustado para o verde */
  border-radius: 50%;
  display: inline-block;
}

/* Ação de entrega */
.tarefa-acoes {
  margin-top: 40px;
  text-align: center;
}

.btn-entregar {
  padding: 14px 28px;
  background-color: #43837d;  /* Ajustado para o verde */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.btn-entregar:hover {
  background-color: #366f63;  /* Cor mais escura de verde */
  transform: scale(1.05);
}

.btn-entregar:active {
  background-color: #2b5d4e;  /* Cor ainda mais escura */
}

/* Efeitos de foco */
.btn-entregar:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(67, 131, 125, 0.5);
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .tarefa-card {
    padding: 20px;
  }

  .header h1 {
    font-size: 28px;
  }

  .btn-entregar {
    padding: 12px 24px;
  }
}
</style>
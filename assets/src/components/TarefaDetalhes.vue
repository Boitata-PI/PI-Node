<template>
    <div class="container tarefa-detalhes">
      <router-link to="/" class="voltar">Voltar</router-link>
  
      <div class="tarefa-card">
        <h2>{{ tarefa.titulo }}</h2>
        <p><strong>Prazo:</strong> {{ tarefa.prazo }}</p>
        <p><strong>Matéria:</strong> {{ tarefa.materia }}</p>
        <h4>Instruções:</h4>
        <ul>
          <li v-for="(instrucao, index) in tarefa.instrucoes" :key="index">
            {{ instrucao }}
          </li>
        </ul>
  
        <div class="tarefa-acoes">
          <button @click="entregarTarefa" class="btn-entregar">Entregar</button>
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
  /* Títulos */
h2 {
  font-size: 28px;
  color: #155c55;
  margin-bottom: 20px;
}

/* Instruções */
h4 {
  font-size: 22px;
  color: #323130;
  margin-top: 20px;
  font-weight: bold;
}

/* Lista de instruções */
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

/* Botões de ação */
.tarefa-acoes {
  margin-top: 30px;
  text-align: center;
}

.btn-entregar {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-entregar:hover {
  background-color: #0056b3;
}

/* Voltar */
.voltar {
  display: inline-block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
}

.voltar:hover {
  text-decoration: underline;
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
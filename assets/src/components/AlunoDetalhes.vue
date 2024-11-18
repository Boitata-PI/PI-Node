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
          <p><strong>Matrícula:</strong> {{ aluno.matricula }}</p>
          <p><strong>Email:</strong> {{ aluno.email }}</p>
        </div>
  
        <div v-if="activeTab === 'Disciplinas'">
          <h4>Disciplinas</h4>
          <ul>
            <li v-for="(disciplina, index) in aluno.disciplinas" :key="index">{{ disciplina }}</li>
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
            <router-link to="/editarAlunos">
              <button class="action-btn edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M15.502 1.94a1.5 1.5 0 0 1 0 2.121L14.121 5.44l-3.293-3.293 1.38-1.38a1.5 1.5 0 0 1 2.121 0l1.173 1.173ZM1 13.293V16h2.707L13.44 6.268l-3.293-3.293L1 13.293Z" />
                </svg>
                Editar
              </button>
            </router-link>
  
            <!-- Botão Excluir -->
            <button @click="deleteAluno" class="action-btn delete-btn">
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
  export default {
    name: 'AlunoDetalhes',
    props: ['id'],
    data() {
      return {
        tabs: ['Ações', 'Disciplinas', 'Notas', 'Detalhes'], // Abas
        activeTab: 'Ações', // Aba ativa por padrão
        alunos: [
          {
            id: 1,
            nome: 'João Silva',
            matricula: '20231001',
            email: 'joao.silva@example.com',
            disciplinas: ['Matemática', 'Física', 'Química'],
            notas: [
              { disciplina: 'Matemática', nota: '8.5' },
              { disciplina: 'Física', nota: '9.0' },
              { disciplina: 'Química', nota: '7.5' }
            ]
          },
          {
            id: 2,
            nome: 'Maria Oliveira',
            matricula: '20231002',
            email: 'maria.oliveira@example.com',
            disciplinas: ['História', 'Geografia', 'Biologia'],
            notas: [
              { disciplina: 'História', nota: '8.0' },
              { disciplina: 'Geografia', nota: '8.7' },
              { disciplina: 'Biologia', nota: '9.5' }
            ]
          },
          {
            id: 3,
            nome: 'Carlos Oliveira',
            matricula: '20231003',
            email: 'carlos.oliveira@example.com',
            disciplinas: ['História', 'Geografia', 'Biologia'],
            notas: [
              { disciplina: 'História', nota: '8.0' },
              { disciplina: 'Geografia', nota: '8.7' },
              { disciplina: 'Biologia', nota: '9.5' }
            ]
          },
          {
            id: 4,
            nome: 'Ana Beatriz',
            matricula: '20231004',
            email: 'ana.beatriz@example.com',
            disciplinas: ['História', 'Geografia', 'Biologia'],
            notas: [
              { disciplina: 'História', nota: '8.0' },
              { disciplina: 'Geografia', nota: '8.7' },
              { disciplina: 'Biologia', nota: '9.5' }
            ]
          }
        ],
        aluno: {}
      };
    },
    methods: {
      async deleteAluno() {
        try {
          alert(`Aluno ${this.aluno.nome} excluído com sucesso!`);
          this.$router.push('/menuAlunos');
        } catch (error) {
          console.error('Erro ao excluir aluno:', error);
          alert('Erro ao tentar excluir o aluno.');
        }
      }
    },
    created() {
      this.aluno = this.alunos.find((a) => a.id == this.id);
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
      list-style-type: none;
      padding: 0;
      margin: 0;
  }
  
  ul li {
      font-size: 16px;
      color: #605e5c;
      margin-bottom: 8px;
  }
  
  ul li::before {
      content: '•';
      color: #155c55;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
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
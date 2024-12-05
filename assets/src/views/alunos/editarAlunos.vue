<template>
    <!-- Conteúdo Principal -->
    <main class="login-container">
      <div class="form-container">
        <h1>Editar Aluno</h1>
        <br>
        <form @submit.prevent="editarAlunoForm" id="editForm">
          <!-- Campo de Registro Aluno (RA) -->
          <label for="rm">Registro Aluno:</label>
          <input v-model="aluno.ra" type="text" id="rm" name="rm" placeholder="Atualize o RM" required />
  
          <!-- Campo de Nome Completo -->
          <label for="name">Nome completo:</label>
          <input v-model="aluno.nome" type="text" id="name" name="name" placeholder="Atualize o nome completo" required />
  
          <!-- Botões de ação -->
          <div class="button-group">
            <button type="submit" class="submit-btn" @click="handleUpdateAluno()">Editar</button>
            <button type="button" class="cancel-btn" @click="cancelEdit">Cancelar</button>
          </div>
        </form>
      </div>
    </main>
  </template>
  
  <script>

  import { findAluno, updateAluno } from "../../js/requisitions/users";

  export default {
    data() {
      return {
        aluno: {},
      };
    },
    methods: {
      async handleUpdateAluno() {
        try {
          await updateAluno(this.aluno);
          this.$router.back();
        } catch (error) {
          console.error("Erro ao atualizar aluno:", error);
        }
      },
      cancelEdit() {
        this.$router.push("/alunos"); // Cancela a edição e volta para a lista
      },
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      },
      openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      },
    },
    async mounted() {
      this.aluno = await findAluno(localStorage.getItem("aluno"));
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos */
  .form-container {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 450px;
    width: 100%;
    margin: 30px auto;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333333;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    font-weight: bold;
    color: #555555;
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
  }
  
  input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    transition: 0.3s;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
  
  .submit-btn, .cancel-btn {
    padding: 14px 30px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    width: 48%;
    display: inline-block;
  }
  
  .submit-btn {
    background-color: #28a745;
    color: white;
    border: none;
  }
  
  .submit-btn:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }
  
  .submit-btn:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
  }
  
  .cancel-btn {
    background-color: #dc3545;
    color: white;
    border: none;
  }
  
  .cancel-btn:hover {
    background-color: #c82333;
    transform: translateY(-2px);
  }
  
  .cancel-btn:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(220, 53, 69, 0.3);
  }
  </style>
  
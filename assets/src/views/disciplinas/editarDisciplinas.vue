<template> 
    <main class="form-container">
      <h1>Editar Disciplina</h1>
      <form @submit.prevent="updateDisciplina" id="editForm">
        <label for="name">Nome da Disciplina:</label>
      <input type="text" v-model="disciplina.nome" id="nameDisciplina" name="nameDisciplina" placeholder="Insira o nome da Disciplina" required />

      <label for="professor">Nome do Professor:</label>
      <select v-model="disciplina.codProf" id="professor" name="professor" required>
        <option value="" disabled selected>Selecione o Professor</option>
        <option v-for="professor in professores" :key="professor.id" :value="professor.id">
          {{ professor.nome }}
        </option>
      </select>

      <button type="submit" class="submit-btn">Editar</button>
    </form>
  </main>
</template>

<script>

import { findDisciplinas, updateDisciplina } from "../../js/requisitions/disciplinas";
import { listProfessor } from "../../js/requisitions/users";

export default {
  data() {
    return {
      disciplina: {},
      professores: [],
    };
  },
    methods: {
      async updateDisciplina() {
        try {
          await updateDisciplina(this.disciplina);
          this.$router.push("/menuDisciplinas");
        } catch (error) {
          console.error(error);
        }
      },
    },
    async mounted() {
      try {
        this.disciplina = await findDisciplinas(localStorage.getItem("disciplina"));
        this.professores = await listProfessor();
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilo aprimorado */
  .form-container {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 50px auto;
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-top: 15px;
    display: block;
  }
  
  input, select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  button:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
  }
  </style>
  
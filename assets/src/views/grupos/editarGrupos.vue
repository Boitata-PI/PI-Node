<template>
  <!-- Container de formulário de edição -->
  <div class="form-container">
    <h1>Editar Grupo</h1>
    <form @submit.prevent="handleUpdateGrupo()" id="editForm">
      <label for="nome">Nome do Grupo:</label>
      <input type="text" v-model="grupo.nome" id="nome" name="nome" placeholder="Nome do Grupo" required />

      <button type="submit" class="submit-btn">Editar</button>
    </form>
  </div>
</template>

<script>

import { findGrupo, updateGrupos } from "../../js/requisitions/grupos";

export default {
  data() {
    return {
      grupo: {},
    };
  },
  methods: {
    async handleUpdateGrupo() {
      try {
        await updateGrupos(this.grupo);
        this.$router.back();
      } catch (error) {
        console.error('Erro ao atualizar o grupo:', error);
        alert('Erro ao tentar atualizar o grupo.');
      }
    },
  },
  async mounted() {
    try {
      this.grupo = await findGrupo(localStorage.getItem('grupo'));
    } catch (error) {
      console.error('Erro ao buscar o grupo:', error);
      alert('Erro ao tentar buscar o grupo.');
    }
  },
};
</script>

<style scoped>
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

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

button {
  background-color: #218838;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover {
  background-color: #1b9c37;
}
</style>
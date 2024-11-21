<template>
  <!-- Container de formulário de edição -->
  <div class="form-container">
    <h1>Editar Grupo</h1>
    <form @submit.prevent="updateGrupo" id="editForm">
      <label for="nome">Nome do Grupo:</label>
      <input type="text" v-model="grupo.nome" id="nome" name="nome" placeholder="Nome do Grupo" required />

      <label for="descricao">Descrição:</label>
      <textarea v-model="grupo.descricao" id="descricao" name="descricao" placeholder="Descrição do Grupo"
        required></textarea>

      <label for="integrantes">Integrantes:</label>
      <input type="text" v-model="grupo.integrantes" id="integrantes" name="integrantes"
        placeholder="Integrantes do Grupo" required />

      <button type="submit" class="submit-btn">Salvar Alterações</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grupo: {
        nome: '',
        descricao: '',
        integrantes: '',
      },
    };
  },
  mounted() {
    // Aqui você pode simular a obtenção do grupo ou realizar uma requisição para pegar os detalhes do grupo
    const grupoId = this.$route.params.id; // Pega o id da URL
    if (grupoId === '1') {
      this.grupo = {
        nome: 'LittleHost - Grupo 01',
        descricao: 'Grupo de estudantes focado em desenvolvimento web.',
        integrantes: 'João, Maria, Pedro',
      };
    } else if (grupoId === '2') {
      this.grupo = {
        nome: 'BAE Guard - Grupo 02',
        descricao: 'Grupo focado em segurança de redes e sistemas.',
        integrantes: 'Lucas, Ana, Felipe',
      };
    }
  },
  methods: {
    async updateGrupo() {
      try {
        alert(`Grupo ${this.grupo.nome} atualizado com sucesso!`);
        this.$router.push('/grupos');
      } catch (error) {
        console.error('Erro ao atualizar o grupo:', error);
        alert('Erro ao tentar atualizar o grupo.');
      }
    },
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
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover {
  background-color: #218838;
}
</style>
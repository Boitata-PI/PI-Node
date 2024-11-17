<template> 
    <main class="form-container">
      <h1>Editar Disciplina</h1>
      <form @submit.prevent="updateDisciplina" id="editForm">
        <label for="name">Nome da Disciplina:</label>
        <input type="text" v-model="disciplina.nome" id="namedisciplina" name="namedisciplina" placeholder="Insira o nome da Disciplina" required />
  
        <label for="periodo">Período:</label>
        <select v-model="disciplina.periodo" id="periodo" name="periodo" required>
          <option value="manha" selected>Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
  
        <label for="coordenador">Nome do Professor:</label>
        <select v-model="disciplina.coordenador" id="coordenador" name="coordenador" required>
          <option value="" disabled selected>Selecione o Professor</option>
          <!-- Coordenadores serão preenchidos dinamicamente -->
        </select>
  
        <button type="submit" class="submit-btn">Salvar Alterações</button>
      </form>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        disciplina: {
          codigo: '',
          nome: '',
          periodo: '',
          coordenador: '',
        },
      };
    },
    mounted() {
      // Simulando a obtenção da disciplina. Aqui você pode substituir por uma chamada API ou método para pegar a disciplina a partir do código.
      this.disciplina = {
        codigo: '101',
        nome: 'Matemática Avançada',
        periodo: 'Manhã',
        coordenador: 'Carlos Oliveira',
      };
    },
    methods: {
      async updateDisciplina() {
        try {
          // Lógica para atualizar a disciplina (pode ser via API ou outras ações)
          alert(`Disciplina ${this.disciplina.nome} atualizada com sucesso!`);
          this.$router.push('/disciplinas');
        } catch (error) {
          console.error('Erro ao atualizar a disciplina:', error);
          alert('Erro ao tentar atualizar a disciplina.');
        }
      },
    },
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
  
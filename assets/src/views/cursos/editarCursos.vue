<template>
    <main class="form-container">
      <h1>Editar Curso</h1>
      <form @submit.prevent="updateCurso" id="editForm">
        <label for="name">Nome do Curso:</label>
        <input type="text" v-model="curso.nome" id="namecurso" name="namecurso" placeholder="Insira o nome do Curso" required />
  
        <label for="periodo">Período:</label>
        <select v-model="curso.periodo" id="periodo" name="periodo" required>
          <option value="manha" selected>Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
  
        <label for="coordenador">Nome do Coordenador:</label>
        <select v-model="curso.coordenador" id="coordenador" name="coordenador" required>
          <option value="" disabled selected>Selecione o Coordenador</option>
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
        curso: {
          codigo: '',
          nome: '',
          periodo: '',
          coordenador: '',
        },
      };
    },
    mounted() {
      // Simulando a obtenção do curso. Aqui você pode substituir por uma chamada API ou método para pegar o curso a partir do código.
      this.curso = {
        codigo: '101',
        nome: 'Desenvolvimento Web',
        periodo: 'Noite',
        coordenador: 'Carlos Oliveira',
      };
    },
    methods: {
      async updateCurso() {
        try {
          // Lógica para atualizar o curso (pode ser via API ou outras ações)
          alert(`Curso ${this.curso.nome} atualizado com sucesso!`);
          this.$router.push('/cursos');
        } catch (error) {
          console.error('Erro ao atualizar o curso:', error);
          alert('Erro ao tentar atualizar o curso.');
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
  
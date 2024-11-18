<template>
  <!-- Container de tarefas -->
  <div class="container mt-5">
    <h4>Tarefas</h4>
    <div class="group-item" v-for="(item, index) in tarefas" :key="index" @click="abrirModal(item.nome)">
      <h5>{{ item.nome }}</h5>
      <p>{{ item.descricao }}</p>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="groupModal" tabindex="-1" aria-labelledby="groupModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="groupModalLabel">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" @click="fecharModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <router-link class="btn-branco" to="/vizualizarTarefas" @click.native="fecharModal">
              <button class="btn">Detalhes</button>
            </router-link>
            <button class="btn">Tarefas</button>
            <button class="btn">Alunos</button>
            <button class="btn">Grupos</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão para adicionar tarefa -->
    <router-link class="btn-branco" to="/cadastroTarefas">
      <div class="add-task-btn">+</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menuTarefas',
  data() {
    return {
      tarefas: [
        { nome: 'LittleHost - Grupo 01', descricao: 'Lorem ipsum dolor sit amet...' },
        { nome: 'BAE Guard - Grupo 02', descricao: 'Lorem ipsum dolor sit amet...' }
      ],
      modalTitle: '',
      modalInstance: null
    };
  },
  methods: {
    abrirModal(titulo) {
      this.modalTitle = titulo;
      this.modalInstance = new bootstrap.Modal(document.getElementById('groupModal'));
      this.modalInstance.show();
    },
    fecharModal() {
      if (this.modalInstance) {
        this.modalInstance.hide();
        this.limparBackdrop(); // Garantir limpeza do backdrop
      }
    },
    limparBackdrop() {
      // Remove manualmente o backdrop e a classe modal-open
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      document.body.classList.remove('modal-open');
    }
  },
  mounted() {
    // Garantir que o modal esteja fechado ao mudar de rota
    this.$router.afterEach(() => {
      this.fecharModal();
    });
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
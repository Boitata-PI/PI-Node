<template class="login">
    
      <div class="login-container">
        <h2>Registrar</h2>
        
        <!-- Formulário de Login -->
        <form @submit="handleRegister" id="regForm">
          <div class="form-group">
            <input v-model="rm" type="text" class="form-control" id="RM" placeholder="RM">
          </div>
          <div class="form-group">
            <input v-model="nome" type="text" class="form-control" id="nome" placeholder="Nome">
          </div>
          <div class="form-group">
            <input v-model="senha" type="password" class="form-control" id ="password" placeholder="Senha">
          </div>
          <div class="form-group">
            <input v-model="confPass" type="password" class="form-control" id="confPass" placeholder="Confirmar Senha">
          </div>
          <div class="form-group text-right">
            <a href="/">Já tem uma conta? faça o login</a>
          </div>
          <button type="submit" class="btn">Registrar</button>
        </form>
      </div>
</template>

<script>

import { register } from "../js/requisitions/registro";

export default {
  name: 'registro',
  data() {
    return {
      rm: '',
      nome: '',
      senha: '',
      confPass: ''
    }
  },
  methods: {
    handleRegister(event) {
      register(event, this.rm, this.nome, this.senha);
    }
  }
}
</script>

<style scoped>
/* Estilos específicos */
</style>
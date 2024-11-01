<template class="login">
  <div class="login-container">
    <h2>Entrar</h2>

    <!-- Formulário de Login -->
    <form>
      <div class="form-group">
        <input class="form-control" placeholder="RM" />
      </div>
      <div class="form-group">
        <input class="form-control" placeholder="Senha" type="password" />
      </div>
      <div class="form-group text-right">
        <router-link to="/registro">Esqueceu sua senha?</router-link>
      </div>
      <router-link to="/index" class="btn btn-block">Entrar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
};
</script>

<style scoped>
/* Estilos específicos */
</style>
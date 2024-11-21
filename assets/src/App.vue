<!-- App.vue -->
<template>
  <div id="app">
    <Navbar v-if="!$route.meta.hideNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    isLoginPage() {
      return this.$route.name === "login"; // ou `this.$route.path === '/login'`
    },
  },
};
</script>

<style>
/* Estilos globais */
</style>
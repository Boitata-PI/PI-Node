<template>
    <div class="turma-card">
        <div class="turma-info">
          <h3>{{ curso.nome }}
              <span>(06302)</span>
          </h3>
          <div class="tags">
              <div class="tag">MANHÃ</div>
              <div class="tag">1º SEMESTRE</div>
          </div>
          </div>
          <div class="ver-mais">
          <router-link class="btn-branco" to="/disciplinas">
              <button @click="setCursoID(curso.id)" class="ver-mais-btn">VER MAIS</button>
          </router-link>
          </div>
    </div>
</template>

<script>
    export default {
    name: 'CursoItem',
    props: {
        curso: {
        type: Object,
        required: true,
        },
    },
    methods: {
        setCursoID(id) {
            sessionStorage.setItem('codCurso', id);
        },
    },
    };
</script>

<style scoped>

</style>

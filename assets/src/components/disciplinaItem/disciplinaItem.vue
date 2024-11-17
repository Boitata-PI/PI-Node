<template>
    <div class="turma-card">
        <div class="turma-info">
          <h3>{{ disciplina.nome }}
              <span>(06302)</span>
          </h3>
          <div class="tags">
              <div class="tag">MANHÃ</div>
              <div class="tag">1º SEMESTRE</div>
          </div>
          </div>
          <div class="ver-mais">
          <router-link class="btn-branco" to="/alunos">
              <button @click="setDiscID(disciplina.id)" class="ver-mais-btn">VER MAIS</button>
          </router-link>
          </div>
    </div>
</template>

<script>
    export default {
        name: 'DisciplinaItem',
        props: {
            disciplina: {
            type: Object,
            required: true,
            },
        },
        methods: {
            setDiscID(id) {
                sessionStorage.setItem("codDisc", id);
            },
        },
    };
</script>

<style scoped>

</style>

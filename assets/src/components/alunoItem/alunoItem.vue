<template>
  <div class="task-item">
    <div class="task-icon"></div>
    <div class="task-info">
      <p>{{ aluno.nome }}</p>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'AlunoItem',
    props: {
        aluno: {
        type: Object,
        required: true,
        },
    },
    };
</script>

<style scoped>

</style>

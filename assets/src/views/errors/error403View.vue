<!-- src/views/Error403View.vue -->
<template>
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">403</span>
            <div class="mb-4 lead">Não Autorizado!</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Error403View",
  };
  </script>
  
  <style scoped>
  body {
    background: #dedede;
  }
  .page-wrap {
    min-height: 100vh;
  }
  </style>
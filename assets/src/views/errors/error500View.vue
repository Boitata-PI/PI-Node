<!-- src/views/Error403View.vue -->
<template>
    <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">500</span>
                    <div class="mb-4 lead">Erro no Servidor!</div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Error500View",
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
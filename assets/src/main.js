import { createApp } from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';
import router from './router';

// Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' 

// Importa o JS do Bootstrap e do jQuery
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'

// Importa o CSS global
import './assets/css/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';

// Importa o Js global

//import './js/requisitions/alunos'
// import './js/requisitions/cadastroAluno'
// import './js/requisitions/cadastroCurso'
// import './js/requisitions/cadastroDisciplina'
// import './js/requisitions/registro'
// import './js/requisitions/disciplinas'
// import './js/requisitions/cursos'


const app = createApp(App);

app.use(router);
app.mount('#app');
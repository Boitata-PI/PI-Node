import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes
import LoginView from '@/views/login.vue';
import IndexView from '@/views/index.vue';
import CursosView from '@/views/cursos.vue';
import AlunosView from '@/views/alunos.vue';
import CadastroAlunoView from '@/views/cadastroAluno.vue';
import CadastroCursoView from '@/views/cadastroCurso.vue';
import CadastroDisciplinaView from '@/views/cadastroDisciplina.vue';
import DisciplinasView from '@/views/disciplinas.vue';
import GruposView from '@/views/grupos.vue';
import MenuCadastroView from '@/views/menuCadastro.vue';
import MenuCursoView from '@/views/menuCurso.vue';
import MenuTurmasView from '@/views/menuTurmas.vue';
import PagDesenvolvimentoView from '@/views/pagDesenvolvimento.vue';
import TurmasView from '@/views/turmas.vue';
import RegistroView from '@/views/registro.vue';
import Error403View from '@/views/errors/error403View.vue';
import Error404View from '@/views/errors/error404View.vue';
import Error500View from '@/views/errors/error500View.vue';

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/index', name: 'index', component: IndexView },
  { path: '/cursos', name: 'cursos', component: CursosView },
  { path: '/alunos', name: 'alunos', component: AlunosView },
  { path: '/cadastroAluno', name: 'cadastroAluno', component: CadastroAlunoView },
  { path: '/cadastroCurso', name: 'cadastroCurso', component: CadastroCursoView },
  { path: '/cadastroDisciplina', name: 'cadastroDisciplina', component: CadastroDisciplinaView },
  { path: '/disciplinas', name: 'disciplinas', component: DisciplinasView },
  { path: '/grupos', name: 'grupos', component: GruposView },
  { path: '/menuCadastro', name: 'menuCadastro', component: MenuCadastroView },
  { path: '/menuCurso', name: 'menuCurso', component: MenuCursoView },
  { path: '/menuTurmas', name: 'menuTurmas', component: MenuTurmasView },
  { path: '/pagDesenvolvimento', name: 'pagDesenvolvimento', component: PagDesenvolvimentoView },
  { path: '/turmas', name: 'turmas', component: TurmasView },
  { path: '/registro', name: 'registro', component: RegistroView },
  { path: '/403', name: 'error403', component: Error403View },
  { path: '/404', name: 'error404', component: Error404View },
  { path: '/500', name: 'error500', component: Error500View },
  { path: '/:catchAll(.*)', redirect: '/404' }, // Fallback para páginas não encontradas
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;
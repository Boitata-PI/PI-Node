import { createRouter, createWebHistory } from 'vue-router';

// Rotas Padrão
import LoginView from '@/views/login.vue';
import IndexView from '@/views/index.vue';

// Dashboards e Menus Gerais
import MenuCursosView from '@/views/cursos/menuCursos.vue';
import MenuDisciplinasView from '@/views/disciplinas/menuDisciplinas.vue';
import MenuAlunosView from '@/views/alunos/menuAlunos.vue';
import MenuTarefasView from '@/views/tarefas/menuTarefas.vue';
import MenuProfessorView from '@/views/professores/menuProfessores.vue';
import MenuRelatoriosView from '@/views/relatorios/menuRelatorios.vue';
import MenuGruposView from '@/views/grupos/menuGrupos.vue';

// Páginas de Erro e Desenvolvimento
import PagDesenvolvimentoView from '@/views/pagDesenvolvimento.vue';
import RegistroView from '@/views/registro.vue';
import Error403View from '@/views/errors/error403View.vue';
import Error404View from '@/views/errors/error404View.vue';
import Error500View from '@/views/errors/error500View.vue';

// CRUD Alunos
import CadastroAlunosView from '@/views/alunos/cadastroAlunos.vue';
import VizualizarAlunosView from '@/views/alunos/vizualizarAlunos.vue';
import EditarAlunosView from '@/views/alunos/editarAlunos.vue';


// CRUD Cursos
import CadastroCursosView from '@/views/cursos/cadastroCursos.vue';
import VizualizarCursosView from '@/views/cursos/vizualizarCursos.vue';
import EditarCursosView from '@/views/cursos/editarCursos.vue';

// CRUD Disciplinas
import CadastroDisciplinasView from '@/views/disciplinas/cadastroDisciplinas.vue';
import VizualizarDisciplinasView from '@/views/disciplinas/vizualizarDisciplinas.vue';
import EditarDisciplinasView from '@/views/disciplinas/editarDisciplinas.vue';


// CRUD Professores
import CadastroProfessoresView from '@/views/professores/cadastroProfessores.vue';
import VizualizarProfessoresView from '@/views/professores/vizualizarProfessores.vue';
import EditarProfessoresView from '@/views/professores/editarProfessores.vue';

// CRUD Relatórios
import CadastroRelatoriosView from '@/views/relatorios/cadastroRelatorios.vue';
import VizualizarRelatoriosView from '@/views/relatorios/vizualizarRelatorios.vue';
import EditarRelatoriosView from '@/views/relatorios/editarRelatorios.vue';

// CRUD Grupos
import CadastroGruposView from '@/views/grupos/cadastroGrupos.vue';
import VizualizarGruposView from '@/views/grupos/vizualizarGrupos.vue';
import EditarGruposView from '@/views/grupos/editarGrupos.vue';


// CRUD Tarefas
import CadastroTarefasView from '@/views/tarefas/cadastroTarefas.vue';
import VizualizarTarefasView from '@/views/tarefas/vizualizarTarefas.vue';
import EditarTarefasView from '@/views/tarefas/editarTarefas.vue';


const routes = [
  //Rotas Padrão DashBoard e Login
  { path: '/', name: 'login', component: LoginView },
  { path: '/index', name: 'index', component: IndexView },

  //Menus Gerais
  { path: '/menuCursos', name: 'menuCursos', component: MenuCursosView },
  { path: '/menuDisciplinas', name: 'menuDisciplinas', component: MenuDisciplinasView },
  { path: '/menuAlunos', name: 'menuAlunos', component: MenuAlunosView },
  { path: '/menuTarefas', name: 'menuTarefas', component: MenuTarefasView },
  { path: '/menuProfessores', name: 'menuProfessores', component: MenuProfessorView },
  { path: '/menuRelatorios', name: 'menuRelatorios', component: MenuRelatoriosView },
  { path: '/menuGrupos', name: 'menuGrupos', component: MenuGruposView },

  //Páginas em Desenvolvimento e Erros
  { path: '/pagDesenvolvimento', name: 'pagDesenvolvimento', component: PagDesenvolvimentoView },
  { path: '/registro', name: 'registro', component: RegistroView },
  { path: '/403', name: 'error403', component: Error403View },
  { path: '/404', name: 'error404', component: Error404View },
  { path: '/500', name: 'error500', component: Error500View },

  // Rotas Padrão
  // { path: '/cursos', name: 'cursos', component: CursosView },
  // { path: '/alunos', name: 'alunos', component: AlunosView },
  // { path: '/disciplinas', name: 'disciplinas', component: DisciplinasView },
  // { path: '/tarefas', name: 'tarefas', component: TarefasView },
  // { path: '/professores', name: 'professores', component: ProfessoresView },
  // { path: '/relatorios', name: 'relatorios', component: RelatoriosView },
  // { path: '/grupos', name: 'grupos', component: GruposView },

   //Aluno Crud
   { path: '/cadastroAlunos', name: 'cadastroAluno', component: CadastroAlunosView },
   { path: '/vizualizarAlunos', name: 'vizualizarAlunos', component: VizualizarAlunosView },
   { path: '/editarAlunos', name: 'editarAlunos', component: EditarAlunosView },
  
  //Cursos Crud 
  { path: '/cadastroCursos', name: 'cadastroCursos', component: CadastroCursosView },
  { path: '/vizualizarCursos', name: 'vizualizarCursos', component: VizualizarCursosView },
  { path: '/editarCursos', name: 'editarCursos', component: EditarCursosView },

  //Disciplinas Crud
  { path: '/cadastroDisciplinas', name: 'cadastroDisciplinas', component: CadastroDisciplinasView },
  { path: '/vizualizarDisciplinas', name: 'vizualizarDisciplinas', component: VizualizarDisciplinasView },
  { path: '/editarDisciplinas', name: 'editarDisciplinas', component: EditarDisciplinasView },

  //Professor Crud
  { path: '/cadastroProfessores', name: 'cadastroProfessores', component: CadastroProfessoresView },
  { path: '/vizualizarProfessores', name: 'vizualizarProfessores', component: VizualizarProfessoresView },
  { path: '/editarProfessores', name: 'editarProfessores', component: EditarProfessoresView },

  //Relatorio Crud
  { path: '/cadastroRelatorios', name: 'cadastroRelatorios', component: CadastroRelatoriosView },
  { path: '/vizualizarRelatorios', name: 'vizualizarRelatorios', component: VizualizarRelatoriosView },
  { path: '/editarRelatorios', name: 'editarRelatorios', component: EditarRelatoriosView },

  //Grupo Crud
  { path: '/editarGrupos', name: 'editarGrupos', component: EditarGruposView },
  { path: '/vizualizarGrupos', name: 'vizualizarGrupos', component: VizualizarGruposView },
  { path: '/cadastroGrupos', name: 'cadastroGrupos', component: CadastroGruposView },

  //Tarefas Crud
  { path: '/editarTarefas', name: 'editarTarefas', component: EditarTarefasView },
  { path: '/vizualizarTarefas', name: 'vizualizarTarefas', component: VizualizarTarefasView },
  { path: '/cadastroTarefas', name: 'cadastroTarefas', component: CadastroTarefasView },

  // Fallback para páginas não encontradas
  { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
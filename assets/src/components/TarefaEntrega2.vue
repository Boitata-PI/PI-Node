<template>
    <div class="container tarefa-detalhes">
      <!-- Cabeçalho com título e voltar -->
      <div class="header">
        <router-link to="/menuTarefas" class="voltar">Voltar</router-link>
        <h1>{{ tarefa.nome }}</h1>
      </div>
  
      <!-- Detalhes da tarefa -->
      <div class="tarefa-card">
        <div class="informacoes">
          <p><strong>Prazo:</strong> <span class="data">{{ formatarData(tarefa.dataVencimento) + ' ' + formatarHora(tarefa.dataVencimento) }}</span></p>
          <p><strong>Disciplina:</strong> <span>{{ disciplina.nome }}</span></p>
          <p><strong>Instruções: <span>{{ tarefa.instrucoes }}</span></strong></p>
        </div>
  
        <h4>Arquivos:</h4>
        <ul>
          <li v-for="link in material" >
            {{ link.nome + ' - ' + link.link }}
          </li>
        </ul>
  
        <form @submit.prevent="entregarTarefa()">
  
          <h4>Devolutiva:</h4>
            <div class="link-group">
              <input type="text" placeholder="Insira a nota" required />
              <input type="url" placeholder="Insira o comentario" required />
            </div>
    
          <!-- Ação para entrega -->
          <div class="tarefa-acoes">
            <button type="submit" class="btn-entregar">Devolver</button>
          </div>
  
        </form>
        
      </div>
    </div>
  </template>
  
  <script>
  
  import { findTarefas, searchEntregaTarefa, cadEntregas, updateEntrega } from '@/js/requisitions/tarefas';
  import { searchGruposAluno } from '../js/requisitions/grupos';
  
  
  export default {
    name: 'TarefaDetalhes',
    data() {
      return {
        tarefa: {},
        disciplina: {},
        material: {},
        grupos: [],
        entrega: {},
        links: []
      };
    },
    methods: {
      async entregarTarefa() {
        try {
  
          const links = JSON.stringify(this.links);
            console.log("LINKS",links);
  
          console.log(this.entrega.length);
  
          if (this.entrega.length > 0) {
  
            await updateEntrega(
              this.entrega[0].id,
              {
                codGrupo: this.grupos.filter(grupo => grupo.Grupo.codDisc === this.disciplina.id)[0].Grupo.id,
                entrega: links
              }
            )
            
          }else{
  
            await cadEntregas({
              codTarefa: this.tarefa.id,
              codGrupo: this.grupos.filter(grupo => grupo.Grupo.codDisc === this.disciplina.id)[0].Grupo.id,
              entrega: links
            })
  
          }
  
          this.$router.back();
        } catch (error) {
          console.error(error);
        }
      },
      formatarData(dataISO) {
        const data = new Date(dataISO); // Converte para objeto Date
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
      },
      formatarHora(dataISO) {
        const data = new Date(dataISO); // Converte para objeto Date
        return data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      },
      addLink() {
        this.links.push({ nome: '', link: '' }); // Adiciona um novo campo de link vazio
      },
      removeLink(index) {
        this.links.splice(index, 1); // Remove o link pelo índice
      },
    },
    async mounted() {
      this.tarefa = await findTarefas(this.$route.params.id);
      this.material = await JSON.parse(this.tarefa.material);
      this.disciplina = await this.tarefa.Disciplina;
      this.grupos = await searchGruposAluno(JSON.parse(localStorage.getItem('userData')).id);
      this.entrega = await searchEntregaTarefa({
        codTarefa: this.tarefa.id,
        codGrupo: this.grupos.filter(grupo => grupo.Grupo.codDisc === this.disciplina.id)[0].Grupo.id
      });
  
      if (this.entrega.length > 0) {
        this.links = await JSON.parse(this.entrega[0].entrega);
      }
  
    }
  };
  </script>
  
  <style scoped>
  /* Container principal */
  .container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7fa;
    border-radius: 10px;
  }
  
  /* Cabeçalho */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #e1e4e8;
    padding-bottom: 15px;
  }
  
  .header h1 {
    font-size: 36px;
    color: #43837d;  /* Ajustado para o verde */
    font-weight: 600;
    margin: 0;
  }
  
  .voltar {
    color: #43837d;  /* Ajustado para o verde */
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
  }
  
  .voltar:hover {
    text-decoration: underline;
  }
  
  /* Detalhes da tarefa */
  .tarefa-card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #43837d;  /* Ajustado para o verde */
  }
  
  .informacoes p {
    font-size: 18px;
    color: #3c4043;
    margin: 10px 0;
  }
  
  .informacoes .data {
    font-weight: 600;
    color: #ff7043;
  }
  
  h4 {
    font-size: 24px;
    color: #43837d;  /* Ajustado para o verde */
    margin-top: 25px;
    font-weight: 600;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ul li {
    font-size: 16px;
    color: #5f6368;
    background-color: #f5f5f5;
    padding: 12px 20px;
    margin-bottom: 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  ul li:hover {
    background-color: #e3f2fd;
    transform: translateY(-4px);
  }
  
  ul li::before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: #43837d;  /* Ajustado para o verde */
    border-radius: 50%;
    display: inline-block;
  }
  
  /* Ação de entrega */
  .tarefa-acoes {
    margin-top: 40px;
    text-align: center;
  }
  
  .btn-entregar {
    padding: 14px 28px;
    background-color: #43837d;  /* Ajustado para o verde */
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
    width: 100%;
    max-width: 300px;
  }
  
  .btn-entregar:hover {
    background-color: #366f63;  /* Cor mais escura de verde */
    transform: scale(1.05);
  }
  
  .btn-entregar:active {
    background-color: #2b5d4e;  /* Cor ainda mais escura */
  }
  
  /* Efeitos de foco */
  .btn-entregar:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(67, 131, 125, 0.5);
  }
  
  .add-btn,
  .remove-btn {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }
  
  .add-btn:hover,
  .remove-btn:hover {
    background-color: #0056b3;
  }
  
  .link-group {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .link-group input {
    width: 100%;
    margin: 10px 0 ;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .container {
      padding: 15px;
    }
  
    .tarefa-card {
      padding: 20px;
    }
  
    .header h1 {
      font-size: 28px;
    }
  
    .btn-entregar {
      padding: 12px 24px;
    }
  }
  </style>
import TarefaRepository from "../../repositories/TarefaRepository.js";
import TarefaEntregaRepository from "../../repositories/TarefaEntregaRepository.js";
import GrupoRepository from "../../repositories/GrupoRepository.js";
import TarefaEntrega from "../../models/TarefaEntrega.js";

const TarefaSeeder = async (database) => {
    const tarefaRepository = new TarefaRepository(database);
    const tarefaEntregaRepository = new TarefaEntregaRepository(database);
    const grupoRepository = new GrupoRepository(database);

    const tarefaA = await tarefaRepository.search({ nome: '1° Sprint'});
    const tarefaB = await tarefaRepository.search({ nome: '2° Sprint' });
    const tarefaC = await tarefaRepository.search({ nome: 'Pré Projeto' });
    const tarefaD = await tarefaRepository.search({ nome: 'Justificativa' });

    const grupoA = await grupoRepository.search({ nome: 'Grupo 1' });
    const grupoB = await grupoRepository.search({ nome: 'Grupo 2' });
    const grupoC = await grupoRepository.search({ nome: 'Grupo A' });
    const grupoD = await grupoRepository.search({ nome: 'Grupo B' });

    const entrega = JSON.stringify([
        { nome: 'Entrega 1', link: 'http://entrega1.com' },
        { nome: 'Entrega 2', link: 'http://entrega2.com' },
        { nome: 'Entrega 3', link: 'http://entrega3.com' },
    ]);

    const TarefaEntregas = [
        new TarefaEntrega({ codTarefa: tarefaA[0].id, codGrupo: grupoA[0].id, entrega: entrega, corrigida: false, dataCorrecao: null, pontos: 0, comentarios: null }),
        new TarefaEntrega({ codTarefa: tarefaB[0].id, codGrupo: grupoB[0].id, entrega: entrega, corrigida: true, dataCorrecao: '2024-12-03 15:00:00', pontos: 10, comentarios: 'Muito Bom!' }),

        new TarefaEntrega({ codTarefa: tarefaC[0].id, codGrupo: grupoC[0].id, entrega: entrega, corrigida: true, dataCorrecao: '2024-12-03 15:00:00', pontos: 10, comentarios: 'Arrumar Diagramas!' }),
        new TarefaEntrega({ codTarefa: tarefaD[0].id, codGrupo: grupoD[0].id, entrega: entrega, corrigida: false, dataCorrecao: null, pontos: 0, comentarios: null }),
    ];

    TarefaEntregas.forEach(async (tarefaEntrega) => {
        await tarefaEntregaRepository.findOrCreate(tarefaEntrega, { codTarefa: tarefaEntrega.getCodTarefa(), codGrupo: tarefaEntrega.getCodGrupo() })
            .then(async (data) => {
                //console.log(data);
                console.log(`TarefaEntrega ${tarefaEntrega.getCodTarefa()}/${tarefaEntrega.getCodGrupo()} cadastrada!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar TarefaEntrega: ', error);
            });
    });
  };
  
  export default TarefaSeeder;
import TarefaRepository from "../../repositories/TarefaRepository.js";
import DisciplinaRepository from "../../repositories/DisciplinaRepository.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import Tarefa from "../../models/Tarefa.js";

const TarefaSeeder = async (database) => {
    const tarefaRepository = new TarefaRepository(database);
    const disciplinaRepository = new DisciplinaRepository(database);
    const usuarioRepository = new UsuarioRepository(database);

    const discA = await disciplinaRepository.search({ nome: 'PI-AMS-2024' });
    const discB = await disciplinaRepository.search({ nome: 'TG-RH-2024-S2' });

    const profA = await usuarioRepository.search({ ra: '121212' });
    const profB = await usuarioRepository.search({ ra: '212121' });

    const material = JSON.stringify([
        { nome: 'Material 1', link: 'http://material1.com' },
        { nome: 'Material 2', link: 'http://material2.com' },
        { nome: 'Material 3', link: 'http://material3.com' },
    ]);

    const Tarefas = [
        new Tarefa({ codDisc: discA[0].id, nome: '1° Sprint', material: material, instrucoes: 'Instruções 1', dataVencimento: '2024-12-31 00:00:00', dataFechamento: '2024-12-31 23:59:59', pontos: 10 }),
        new Tarefa({ codDisc: discA[0].id, nome: '2° Sprint', material: material, instrucoes: 'Instruções 2', dataVencimento: '2024-12-31 00:00:00', dataFechamento: '2024-12-31 23:59:59', pontos: 20 }),

        new Tarefa({ codDisc: discB[0].id, nome: 'Pré Projeto', material: material, instrucoes: 'Instruções 1', dataVencimento: '2024-12-31 00:00:00', dataFechamento: '2024-12-31 23:59:59', pontos: 10 }),
        new Tarefa({ codDisc: discA[0].id, nome: 'Justificativa', material: material, instrucoes: 'Instruções 2', dataVencimento: '2024-12-31 00:00:00', dataFechamento: '2024-12-31 23:59:59', pontos: 30 }),
    ];

    Tarefas.forEach(async (tarefa) => {
        await tarefaRepository.findOrCreate(tarefa, { codDisc: tarefa.getCodDisc(), nome: tarefa.getNome() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Tarefa ${tarefa.getNome()} cadastrada!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar Tarefa: ', error);
            });
    });
  };
  
  export default TarefaSeeder;
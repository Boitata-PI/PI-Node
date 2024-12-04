import GrupoRepository from "../../repositories/GrupoRepository.js";
import DisciplinaRepository from "../../repositories/DisciplinaRepository.js";
import Grupo from "../../models/Grupo.js";

const GrupoSeeder = async (database) => {
    const grupoRepository = new GrupoRepository(database);
    const disciplinaRepository = new DisciplinaRepository(database);

    const discA = await disciplinaRepository.search({ nome: 'PI-AMS-2024' });
    const discB = await disciplinaRepository.search({ nome: 'TG-RH-2024-S2' });

    const Grupos = [
        new Grupo({ nome: 'Grupo 1', codDisc: discA[0].id }),
        new Grupo({ nome: 'Grupo 2', codDisc: discA[0].id }),

        new Grupo({ nome: 'Grupo A', codDisc: discB[0].id }),
        new Grupo({ nome: 'Grupo B', codDisc: discB[0].id }),
    ];

    Grupos.forEach(async (grupo) => {
        await grupoRepository.findOrCreate(grupo, { codDisc: grupo.getCodDisc(), nome: grupo.getNome() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Grupo ${grupo.getNome()} cadastrado!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar Grupo: ', error);
            });
    });
  };
  
  export default GrupoSeeder;
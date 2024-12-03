import AlunoGrupoRepository from "../../repositories/AlunoGrupoRepository.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import GrupoRepository from "../../repositories/GrupoRepository.js";
import AlunoGrupo from "../../models/AlunoGrupo.js";

const AlunoGrupoSeeder = async (database) => {
    const alunoGrupoRepository = new AlunoGrupoRepository(database);
    const usuarioRepository = new UsuarioRepository(database);
    const grupoRepository = new GrupoRepository(database);

    const alunoA = await usuarioRepository.search({ ra: '111111' });
    const alunoB = await usuarioRepository.search({ ra: '222222' });
    const alunoC = await usuarioRepository.search({ ra: '333333' });
    const alunoD = await usuarioRepository.search({ ra: '444444' });

    const alunoE = await usuarioRepository.search({ ra: '555555' });
    const alunoF = await usuarioRepository.search({ ra: '666666' });
    const alunoG = await usuarioRepository.search({ ra: '777777' });
    const alunoH = await usuarioRepository.search({ ra: '888888' });

    const grupoA = await grupoRepository.search({ nome: 'Grupo 1' });
    const grupoB = await grupoRepository.search({ nome: 'Grupo 2' });
    const grupoC = await grupoRepository.search({ nome: 'Grupo A' });
    const grupoD = await grupoRepository.search({ nome: 'Grupo B' });

    const AlunoGrupos = [
        new AlunoGrupo({ codAluno: alunoA[0].id, codGrupo: grupoA[0].id }),
        new AlunoGrupo({ codAluno: alunoB[0].id, codGrupo: grupoA[0].id }),

        new AlunoGrupo({ codAluno: alunoC[0].id, codGrupo: grupoB[0].id }),
        new AlunoGrupo({ codAluno: alunoD[0].id, codGrupo: grupoB[0].id }),


        new AlunoGrupo({ codAluno: alunoE[0].id, codGrupo: grupoC[0].id }),
        new AlunoGrupo({ codAluno: alunoF[0].id, codGrupo: grupoC[0].id }),

        new AlunoGrupo({ codAluno: alunoG[0].id, codGrupo: grupoD[0].id }),
        new AlunoGrupo({ codAluno: alunoH[0].id, codGrupo: grupoD[0].id }),
    ];

    AlunoGrupos.forEach(async (AlunoGrupo) => {
        await alunoGrupoRepository.findOrCreate(AlunoGrupo, { codAluno: AlunoGrupo.getCodAluno(), codGrupo: AlunoGrupo.getCodGrupo() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Aluno ${AlunoGrupo.getCodAluno()}/Grupo ${AlunoGrupo.getCodGrupo()} cadastrado!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar AlunoGrupo: ', error);
            });
    });
  };
  
  export default AlunoGrupoSeeder;
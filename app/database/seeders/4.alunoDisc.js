import AlunoDiscRepository from "../../repositories/AlunoDiscRepository.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import DisciplinaRepository from "../../repositories/DisciplinaRepository.js";
import AlunoDisc from "../../models/AlunoDisc.js";

const AlunoDiscSeeder = async (database) => {
    const alunoDiscRepository = new AlunoDiscRepository(database);
    const usuarioRepository = new UsuarioRepository(database);
    const disciplinaRepository = new DisciplinaRepository(database);

    const alunoA = await usuarioRepository.search({ ra: '111111' });
    const alunoB = await usuarioRepository.search({ ra: '222222' });
    const alunoC = await usuarioRepository.search({ ra: '333333' });
    const alunoD = await usuarioRepository.search({ ra: '444444' });

    const alunoE = await usuarioRepository.search({ ra: '555555' });
    const alunoF = await usuarioRepository.search({ ra: '666666' });
    const alunoG = await usuarioRepository.search({ ra: '777777' });
    const alunoH = await usuarioRepository.search({ ra: '888888' });

    const disciplinaA = await disciplinaRepository.search({ nome: 'PI-AMS-2024' });
    const disciplinaB = await disciplinaRepository.search({ nome: 'TG-RH-2024-S2' });

    const AlunoDiscs = [
        new AlunoDisc({ codAluno: alunoA[0].id, codDisc: disciplinaA[0].id }),
        new AlunoDisc({ codAluno: alunoB[0].id, codDisc: disciplinaA[0].id }),
        new AlunoDisc({ codAluno: alunoC[0].id, codDisc: disciplinaA[0].id }),
        new AlunoDisc({ codAluno: alunoD[0].id, codDisc: disciplinaA[0].id }),

        new AlunoDisc({ codAluno: alunoE[0].id, codDisc: disciplinaB[0].id }),
        new AlunoDisc({ codAluno: alunoF[0].id, codDisc: disciplinaB[0].id }),
        new AlunoDisc({ codAluno: alunoG[0].id, codDisc: disciplinaB[0].id }),
        new AlunoDisc({ codAluno: alunoH[0].id, codDisc: disciplinaB[0].id }),
    ];

    AlunoDiscs.forEach(async (AlunoDisc) => {
        await alunoDiscRepository.findOrCreate(AlunoDisc, { codAluno: AlunoDisc.getCodAluno(), codDisc: AlunoDisc.getCodDisc() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Aluno ${AlunoDisc.getCodAluno()}/Disciplina ${AlunoDisc.getCodDisc()} cadastrado!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar AlunoDisc: ', error);
            });
    });
  };
  
  export default AlunoDiscSeeder;
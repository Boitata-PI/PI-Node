import DisciplinaRepository from "../../repositories/DisciplinaRepository.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import CursoRepository from "../../repositories/CursoRepository.js";
import Disciplina from "../../models/Disciplina.js";

const DisciplinaSeeder = async (database) => {
    const disciplinaRepository = new DisciplinaRepository(database);
    const usuarioRepository = new UsuarioRepository(database);
    const cursoRepository = new CursoRepository(database);

    const profA = await usuarioRepository.search({ ra: '121212' });
    const profB = await usuarioRepository.search({ ra: '212121' });

    const cursoA = await cursoRepository.search({ nome: 'Desenvolvimento de Sistemas AMS' });
    const cursoB = await cursoRepository.search({ nome: 'Recursos Humanos' });

    const Disciplinas = [
        new Disciplina({ nome: 'PI-AMS-2024', codProf: profA[0].id, codCurso: cursoA[0].id }),
        new Disciplina({ nome: 'TG-RH-2024-S2', codProf: profB[0].id, codCurso: cursoB[0].id }),
    ];

    Disciplinas.forEach(async (disciplina) => {
        await disciplinaRepository.findOrCreate(disciplina, { codCurso: disciplina.getCodCurso(), nome: disciplina.getNome() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Disciplina ${disciplina.getNome()} cadastrada!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar Disciplina: ', error);
            });
    });
  };
  
  export default DisciplinaSeeder;
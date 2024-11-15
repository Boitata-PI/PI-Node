import CursoRepository from "../../repositories/CursoRepository.js";
import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import Curso from "../../models/Curso.js";

const CursoSeeder = async (database) => {
    const cursoRepository = new CursoRepository(database);
    const usuarioRepository = new UsuarioRepository(database);

    const cordA = await usuarioRepository.search({ ra: '112211' });
    const cordB = await usuarioRepository.search({ ra: '221122' });

    const Cursos = [
        new Curso({ nome: 'Desenvolvimento de Sistemas AMS', codCord: cordA[0].id }),
        new Curso({ nome: 'Recursos Humanos', codCord: cordB[0].id }),
    ];

    Cursos.forEach(async (curso) => {
        await cursoRepository.findOrCreate(curso, { nome: curso.getNome() })
            .then(async (data) => {
                //console.log(data);
                console.log(`Curso ${curso.getNome()} cadastrado!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar Curso: ', error);
            });
    });
  };
  
  export default CursoSeeder;
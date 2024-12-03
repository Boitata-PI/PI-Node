import UsuarioRepository from "../../repositories/UsuarioRepository.js";
import Usuario from "../../models/Usuario.js";
import bcrypt from 'bcryptjs';

const UsuarioSeeder = async (database) => {
    const usuarioRepository = new UsuarioRepository(database);

    const senha = bcrypt.hashSync('123', 10);

    const usuarios = [
        new Usuario({ nome: 'Administrador', ra: '000000', senha, tipo: 'ADM' }),

        new Usuario({ nome: 'João', ra: '111111', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Manuela', ra: '222222', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Sara', ra: '333333', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Eliel', ra: '444444', senha, tipo: 'ALUNO' }),

        new Usuario({ nome: 'Victor', ra: '555555', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Juan', ra: '666666', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Julio', ra: '777777', senha, tipo: 'ALUNO' }),
        new Usuario({ nome: 'Maria', ra: '888888', senha, tipo: 'ALUNO' }),

        new Usuario({ nome: 'Cristina', ra: '121212', senha, tipo: 'PROFESSOR' }),
        new Usuario({ nome: 'Company', ra: '212121', senha, tipo: 'PROFESSOR' }),

        new Usuario({ nome: 'Célio', ra: '112211', senha, tipo: 'PROFESSOR' }),
        new Usuario({ nome: 'Rafael', ra: '221122', senha, tipo: 'PROFESSOR' })
    ];

    usuarios.forEach(async (usuario) => {
        await usuarioRepository.findOrCreate(usuario, { ra: usuario.getRa(), tipo: usuario.getTipo() })
            .then((data) => {
                //console.log(data);
                console.log(`Usuário ${usuario.getNome()} cadastrado!`);
            })
            .catch((error) => {
                console.error('Erro ao buscar usuário: ', error);
            });
    });
  };
  
  export default UsuarioSeeder;
import Sequelize from 'sequelize';

const getAlunoModel = (sequelize) => {
    const Aluno = sequelize.define('alunos',{
        codCurso:{
            type: Sequelize.STRING
        },
        codUsuario:{
            type: Sequelize.STRING
        },
    })
    
    Aluno.sync()

    return Aluno;
}

export default getAlunoModel;
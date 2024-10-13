import Sequelize from 'sequelize';

const getCursoModel = (sequelize) => {
    const Curso = sequelize.define('cursos', {
        codCurso: {
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING
        },
    });

};

export default getAlunoModel;
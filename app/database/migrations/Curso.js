import Sequelize from 'sequelize';

const getCursoModel = (sequelize) => {
    const Curso = sequelize.define('cursos', {
        codCord: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'codCord',
            }
        },

        nome: {
            type: Sequelize.STRING
        },
    });

    Curso.sync();

    return Curso;
};

export default getCursoModel;
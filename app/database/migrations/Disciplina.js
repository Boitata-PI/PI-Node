import Sequelize from 'sequelize';

const getDisciplinaModel = (sequelize) => {
    const Disciplina = sequelize.define('disciplinas', {
        codProf: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            }
        },

        nome: {
            type: Sequelize.STRING
        }
    });

    Disciplina.sync();

    return Disciplina;
};

export default getDisciplinaModel;

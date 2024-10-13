import Sequelize from 'sequelize';

const getDisciplinaModel = (sequelize) => {
    const Disciplina = sequelize.define('disciplinas', {
        codProf: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'codProf',
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

import Sequelize from 'sequelize';

const getDisciplinaModel = (sequelize) => {
    const Disciplina = sequelize.define('disciplinas', {
        codDisc: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING
        },
        codUsu: {
            type: Sequelize.INTEGER
        }
    });
};

export default getDisciplinaModel;

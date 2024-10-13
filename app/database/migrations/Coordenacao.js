import Sequelize from 'sequelize';

const getCoordenacaoModel = (sequelize) => {
    const Coordenacao = sequelize.define('coordenacao', {
        codCurso: {
            type: Sequelize.INTEGER
        },
        codUsu: {
            type: Sequelize.INTEGER
        },
    });

};

export default getCoordenacaoModel;

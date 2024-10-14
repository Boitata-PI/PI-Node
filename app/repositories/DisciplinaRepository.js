import Disciplina from '../models/Disciplina.js';
import getDisciplinaModel from '../database/migrations/Disciplina.js';

class DisciplinaRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.Disciplina = getDisciplinaModel(this.sequelize);
  }

  async create(disciplina) {
    const disciplinaData = await this.Disciplina.create({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
    });

    return disciplinaData;
  }

  async update(disciplina){
    const disciplinaData = await this.Disciplina.update({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
    }, {
      where: {
        id: disciplina.getId()
      }
    });

    return disciplinaData;
  }

  async list(){
    const disciplinas = await this.Disciplina.findAll();

    return disciplinas;
  }

  async find(id){
    const disciplina = await this.Disciplina.findOne({ where: { id } });

    return disciplina;
  }

  async search(params){
    const disciplinas = await this.Disciplina.findAll({ where: params });

    return disciplinas;
  }

  async delete(Disciplina){
    const disciplina = await this.Disciplina.destroy({ where: { id: Disciplina.getId() } });

    return disciplina;
  }
}
  

export default DisciplinaRepository;
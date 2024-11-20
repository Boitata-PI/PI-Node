import Disciplina from '../models/Disciplina.js';

class DisciplinaRepository {
  constructor(database) {
    this.models = database.getModels();
    this.Disciplina = database.getModels().Disciplina;
  }

  async create(disciplina) {
    return await this.Disciplina.create({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
      codCurso: disciplina.getCodCurso()
    });
  }

  async findOrCreate(disciplina, params) {
    return await this.Disciplina.findOrCreate({
      where: params,
      defaults: {
        nome: disciplina.getNome(),
        codProf: disciplina.getCodProf(),
        codCurso: disciplina.getCodCurso()
      }
    }); 
  }

  async update(disciplina){
    return await this.Disciplina.update({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
      codCurso: disciplina.getCodCurso()
    }, {
      where: {
        id: disciplina.getId()
      }
    });
  }

  async list(){
    return await this.Disciplina.findAll();
  }

  async find(id){
    return await this.Disciplina.findOne({ where: { id } });
  }

  async search(params){
    return await this.Disciplina.findAll({ where: params });
  }

  async delete(Disciplina){
    return await this.Disciplina.destroy({ where: { id: Disciplina.getId() } });
  }
}


export default DisciplinaRepository;
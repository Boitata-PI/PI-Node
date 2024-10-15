import Curso from '../models/Curso.js';

class CursoRepository {
  constructor(database) {
    this.models = database.getModels();
    this.Curso = database.getModels().Curso;
  }

  async create(curso) {
    return await this.Curso.create({
      nome: curso.getNome(),
      codCord: curso.getCodCord()
    });
  }

  async update(curso){
    return await this.Curso.update({
      nome: curso.getNome(),
      codCord: curso.getCodCord()
    }, {
      where: {
        id: curso.getId()
      }
    });
  }

  async list(){
    return await this.Curso.findAll();
  }

  async find(id){
    return await this.Curso.findOne({ where: { id } });
  }

  async search(params){
    return await this.Curso.findAll({ where: params });
  }

  async delete(curso){
    return await this.Curso.destroy({ where: { id: curso.getId() } });
  }
}


export default CursoRepository;
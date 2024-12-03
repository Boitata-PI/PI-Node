import Grupo from '../models/Grupo.js';

class GrupoRepository {
  constructor(database) {
    this.models = database.getModels();
    this.Grupo = database.getModels().Grupo;
  }

  async create(grupo) {
    return await this.Grupo.create({
      nome: grupo.getNome(),
      codDisc: grupo.getCodDisc()
    });
  }

  async findOrCreate(grupo, params) {
    return await this.Grupo.findOrCreate({
      where: params,
      defaults: {
        nome: grupo.getNome(),
        codDisc: grupo.getCodDisc()
      }
    }); 
  }

  async update(grupo){
    return await this.Grupo.update({
      nome: grupo.getNome(),
      codDisc: grupo.getCodDisc()
    }, {
      where: {
        id: grupo.getId()
      }
    });
  }

  async list(){
    return await this.Grupo.findAll();
  }

  async find(id){
    return await this.Grupo.findOne({ where: { id } });
  }

  async search(params){
    return await this.Grupo.findAll({ where: params });
  }

  async delete(grupo){
    return await this.Grupo.destroy({ where: { id: grupo.getId() } });
  }
}


export default GrupoRepository;
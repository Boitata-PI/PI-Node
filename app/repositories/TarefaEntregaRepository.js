import TarefaEntrega from '../models/TarefaEntrega.js';

class TarefaEntregaRepository {
  constructor(database) {
    this.models = database.getModels();
    this.TarefaEntrega = database.getModels().tarefaEntrega;
  }

  async create(tarefaEntrega) {
    return await this.TarefaEntrega.create({
      nome: tarefaEntrega.getNome(),
      codCord: tarefaEntrega.getCodCord()
    });
  }

  async findOrCreate(tarefaEntrega, params) {
    return await this.TarefaEntrega.findOrCreate({
      where: params,
      defaults: {
        nome: tarefaEntrega.getNome(),
        codCord: tarefaEntrega.getCodCord()
      }
    }); 
  }

  async update(tarefaEntrega){
    return await this.TarefaEntrega.update({
      nome: tarefaEntrega.getNome(),
      codCord: tarefaEntrega.getCodCord()
    }, {
      where: {
        id: tarefaEntrega.getId()
      }
    });
  }

  async list(){
    return await this.TarefaEntrega.findAll();
  }

  async find(id){
    return await this.TarefaEntrega.findOne({ where: { id } });
  }

  async search(params){
    return await this.TarefaEntrega.findAll({ where: params });
  }

  async delete(tarefaEntrega){
    return await this.TarefaEntrega.destroy({ where: { id: tarefaEntrega.getId() } });
  }
}


export default TarefaEntregaRepository;
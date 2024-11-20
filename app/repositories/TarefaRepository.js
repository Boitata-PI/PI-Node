import Tarefa from '../models/Tarefa.js';

class TarefaRepository {
  constructor(database) {
    this.models = database.getModels();
    this.Tarefa = database.getModels().tarefa;
  }

  async create(tarefa) {
    return await this.Tarefa.create({
      nome: tarefa.getNome(),
      codCord: tarefa.getCodCord()
    });
  }

  async findOrCreate(tarefa, params) {
    return await this.Tarefa.findOrCreate({
      where: params,
      defaults: {
        nome: tarefa.getNome(),
        codCord: tarefa.getCodCord()
      }
    }); 
  }

  async update(tarefa){
    return await this.Tarefa.update({
      nome: tarefa.getNome(),
      codCord: tarefa.getCodCord()
    }, {
      where: {
        id: tarefa.getId()
      }
    });
  }

  async list(){
    return await this.Tarefa.findAll();
  }

  async find(id){
    return await this.Tarefa.findOne({ where: { id } });
  }

  async search(params){
    return await this.Tarefa.findAll({ where: params });
  }

  async delete(tarefa){
    return await this.Tarefa.destroy({ where: { id: tarefa.getId() } });
  }
}


export default tarefaRepository;
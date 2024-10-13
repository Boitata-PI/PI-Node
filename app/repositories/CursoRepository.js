import Curso from '../models/Curso.js';
import getCursoModel from '../database/migrations/Curso.js';

class CursoRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.Curso = getCursoModel(this.sequelize);
  }

  async create(curso) {
    const cursoData = await this.Curso.create({
      nome: curso.getNome(),
      ra: curso.getRA(),
      senha: curso.getSenha(),
      tipo: curso.getTipo()
    });

    return cursoData;
  }

  async update(curso){
    const cursoData = await this.Curso.update({
      nome: curso.getNome(),
      ra: curso.getRA(),
      senha: curso.getSenha(),
      tipo: curso.getTipo()
    }, {
      where: {
        id: curso.getId()
      }
    });

    return cursoData;
  }

  async list(){
    const cursos = await this.Curso.findAll();

    return cursos;
  }

  async find(id){
    const curso = await this.Curso.findOne({ where: { id } });

    return curso;
  }

  async search(params){
    const cursos = await this.Curso.findAll({ where: params });

    return cursos;
  }

  async delete(id){
    const curso = await this.Curso.destroy({ where: { id } });

    return curso;
  }
}
  

export default CursoRepository;
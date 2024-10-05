import Usuario from '../models/Usuario.js';
import getUsuarioModel from '../database/migrations/Usuario.js';

class UsuarioRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.Usuario = getUsuarioModel(this.sequelize);
  }

  async register(user) {
    const userData = await this.Usuario.create({
      senha: user.getSenha(),
      nome: user.getNome(),
      ra: user.getRA()
    });

    return userData;
  }

  async login(email, password) {
    const user = await this.Usuario.findOne({ where: { email, password } });
    return user;
  }

  async logout(token) {
    const user = await this.Usuario.destroy({ where: {token} });
    return user;
  }
}
  

export default UsuarioRepository;
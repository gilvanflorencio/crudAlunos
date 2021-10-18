import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gilvan',
      sobrenome: 'Florencio',
      email: 'gilvanf28@gmail.com',
      idade: 32,
      peso: 1.67,
      altura: 1.63,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();

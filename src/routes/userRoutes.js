import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.post('/', loginRequired, userController.store);
router.get('/', loginRequired, userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete); // Lista usuários

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/

// Importando  Router 
import { Router } from 'express';

// Importando el controlador 
import userController from '@server/controllers/userController';

// creando la instancia de un router 
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);   
export default router;

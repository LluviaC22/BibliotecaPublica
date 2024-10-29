import express from 'express';
import {getAllUsers, getUserById,updateUser, deleteUser, login, register} from '../controllers/UsuarioController.js'
import { verifyToken } from '../middlewares/auth.js';
import { verifyRole } from '../middlewares/VerificarRol.js';

const router = express.Router();

// Rutas de autenticación (públicas)
router.post('/login', login);
router.post('/register', register);

// Rutas de gestión de usuarios (protegidas)
router.get('/', verifyToken, verifyRole([1]),getAllUsers);
router.get('/:id_usuario',verifyToken, verifyRole([1]),getUserById);
router.put('/:id_usuario', verifyToken, verifyRole([1]), updateUser);
router.delete('/:id_usuario', verifyToken, verifyRole([1]), deleteUser);

export default router;
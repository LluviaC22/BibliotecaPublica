import express from 'express';
import {getAllUsers, getUserById,updateUser, deleteUser, login, register, ActualizarPerfil} from '../controllers/UsuarioController.js'
import { RestablecerContrasena, VerificarTokenYRestablecerContrasena, ActualizarContrasena } from '../controllers/ContrasenaController.js';
import { verifyToken } from '../middlewares/auth.js';
import { verifyRole } from '../middlewares/VerificarRol.js';


const router = express.Router();

// Rutas de autenticación (públicas)
router.post('/login', login);
router.post('/register', register);

// Rutas
router.post('/restablecer', RestablecerContrasena); // Enviar el correo de restablecimiento
router.get('/restablecer/:token', VerificarTokenYRestablecerContrasena); // Verificar token
router.post('/actualizar/:token', ActualizarContrasena); // Actualizar contraseña


// Rutas de gestión de usuarios (protegidas)
router.get('/', verifyToken, verifyRole([1]),getAllUsers);
router.get('/:id_usuario',verifyToken, verifyRole([1]),getUserById);
router.put('/:id_usuario', verifyToken, verifyRole([1]), updateUser);
router.delete('/:id_usuario', verifyToken, verifyRole([1]), deleteUser);

//Actualizar perfil
router.put('/perfil/:id_usuario', verifyToken, ActualizarPerfil);

export default router;
//Importaciones
import express from 'express'
import { verifyToken } from '../middlewares/auth.js';
import { verifyRole } from '../middlewares/VerificarRol.js';
import { obtenerHistorial } from '../controllers/HistorialController.js';
import {getAllLibros, getLibro, createLibro, updateLibro, deleteLibro, buscarLibro, reservarLibro, prestarLibro} from '../controllers/LibroController.js'

import { generarPdfReserva } from '../Pdfkit/GenerarPdf.js';
const router = express.Router()//router 

// Rutas públicas
router.get('/', getAllLibros)
router.get('/historial', verifyToken,obtenerHistorial);
router.get('/:id_libro', getLibro)
router.get('/buscar/:termino', buscarLibro);

// Rutas protegidas
//Se requiere que el usuario sea id_rol:1, que es administrador
router.post('/',verifyToken, verifyRole([1]),createLibro)
router.put('/:id_libro',verifyToken, verifyRole([1]), updateLibro)
router.delete('/:id_libro',verifyToken, verifyRole([1]), deleteLibro)

// Rutas para reservas y préstamos, requieren autenticación
//Cualquier usuario que esté logueado puede reservar o predir prestado un libro
router.post('/reservar', verifyToken, reservarLibro);
router.post('/prestar', verifyToken, prestarLibro);

router.post('/generar-pdf-reserva', verifyToken, generarPdfReserva);

export default router;
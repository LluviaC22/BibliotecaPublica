import PrestamoModel from '../models/PrestamoModel.js';
import ReservaModel from '../models/ReservaModel.js';
import LibroModel from '../models/LibroModel.js';

// Obtener el historial completo de los préstamos y reservas de un usuario
export const obtenerHistorial = async (req, res) => {
    try {
        const id_usuario = req.id_usuario; 

        // Obtener todos los préstamos del usuario
        const prestamos = await PrestamoModel.findAll({
            where: { id_usuario },
            attributes: ['id_prestamo', 'fecha_prestamo', 'fecha_devolucion', 'devuelto', 'id_libro'] // Solo los campos necesarios
        });

        // Obtener todas las reservas del usuario
        const reservas = await ReservaModel.findAll({
            where: { id_usuario },
            attributes: ['id_reserva', 'fecha_reserva', 'estado', 'id_libro'] 
        });

        // Si no hay libros prestados ni reservados en el historial
        if (prestamos.length === 0 && reservas.length === 0) {
            return res.status(404).json({ message: 'No tienes historial de préstamos ni reservas.' });
        }

        // Obtener los detalles de los libros de los préstamos
        const prestamosConLibros = await Promise.all(prestamos.map(async (prestamo) => {
            const libro = await LibroModel.findByPk(prestamo.id_libro, {
                attributes: ['titulo', 'autor', 'categoria'] 
            });
            return { ...prestamo.dataValues, libro }; //Devuelve todos los elementos y valores del array, titulo, autor etc
        }));

        // Obtener los detalles de los libros de las reservas
        const reservasConLibros = await Promise.all(reservas.map(async (reserva) => {
            const libro = await LibroModel.findByPk(reserva.id_libro, {
                attributes: ['titulo', 'autor', 'categoria'] 
            });
            return { ...reserva.dataValues, libro }; 
        }));

        // Devolver el historial completo de los préstamos y reservas
        res.json({
            prestamos: prestamosConLibros,
            reservas: reservasConLibros
        });

    } catch (error) {
        console.error("Error al obtener el historial:", error);
        res.status(500).json({ message: 'Error al obtener el historial' });
    }
};

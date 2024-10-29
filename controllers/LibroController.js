
//Importar los modelos
import PrestamoModel from "../models/PrestamoModel.js"; 
import LibroModel from "../models/LibroModel.js";
import ReservaModel from "../models/ReservaModel.js";
import { Op } from "sequelize";

//MÉTODOS PARA EL CRUD 

//Mostrar o obtenr todos los libros
export const getAllLibros = async(req, res)=>{//Crear una función asíncrona 
    try {//Para manejar errores (try)
        const libros = await LibroModel.findAll()//Constante libros para el resultado de buscar todos los libros, con await el código se detendrá hasta que la buqueda de libros se haga
        res.json(libros)//Si la operación sale bien.Respuesta en JSON
    } catch (error) {//Si no, un mensaje de error
        res.json({message: error.message})
    }
}
//Mostrar o obtenr un libro x id
export const getLibro = async(req, res) =>{//F asíncrona que busca el libro por el id
    try {
        const libro = await LibroModel.findAll({//Se obtiene el id del libro de los parámetros
            where:{id_libro:req.params.id_libro}//Para buscar el libro que sea igual al id que se ingrese
        })
        res.json(libro [0])//Primer libro de la lista encontrado
    } catch (error) {
        res.json({message: error.message})  
    }
}
//Agregar un libro
export const createLibro = async (req, res) =>{
    try {//req.body tiene los datos dellibro que se quieren crear
        await LibroModel.create(req.body)//Se llama a create que inserta un nuevo registro en la bd
        res.json({
            "message":"Registro exitoso"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Actualizar un libro
export const updateLibro = async (req, res) =>{
    try {
        LibroModel.update(req.body,{//Lllama al metodo update para modificar los registros que cumplan con el id ingresado
            where: {id_libro: req.params.id_libro}
        })
        res.json({
            "message":"Registro actualizad exitoso"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un libro
export const deleteLibro = async(req, res) =>{
    try {
        await LibroModel.destroy({//Llama al metodo destroy para eliminar libro que sea igual que el id ingresado
            where: {id_libro: req.params.id_libro}
        })
        res.json({
            "message":"Registro borrado exitoso"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


//BUSCAR LIBRO POR AUTOR, TITULO O CATEGORÍA
export const buscarLibro = async (req, res) => {
    try {
        //Para obtener el término de la búsqueda desde los parámetros de la ruta
        const { termino } = req.params; 

        // Buscar libros que coincidan con el título, categoría o autor
        const libros = await LibroModel.findAll({
            where: {
                [Op.or]: [//Op.or: Operador para que busque las coincidencias, para cualquiera de las condiciones que sea verdadera
                    { titulo: { [Op.like]: `%${termino}%` } },  // Buscar por títulos de libros que que tengan el término que se ingresó
                    { categoria: { [Op.like]: `%${termino}%` } }, // Buscar por categoría
                    { autor: { [Op.like]: `%${termino}%` } } // Buscar por autor
                ]
            }
        });

        // Si no se encuentran libros, se devuelve
        if (libros.length === 0) {//Checa si la longitud del arreglo libros es igual a 0
            return res.status(404).json({ message: 'No se encontraron libros' });
        }

        // Devolver los libros encontrados
        res.json(libros);
    } catch (error) {
        res.json({ message: error.message });
    }
};


// PRESTAR LIBRO
export const prestarLibro = async (req, res) => {
    try {
        const { id_libro, nombres, ap_paterno, ap_materno, domicilio, fecha_devolucion } = req.body; 
        const id_usuario = req.id_usuario; // Id del usuario logueado

        //Checar si el libro existe
        const libro = await LibroModel.findByPk(id_libro);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }

        // Verificar si el libro ya está prestado 
        const existePrestamo = await PrestamoModel.findOne({
            where: { id_libro, id_usuario }
        });
        if (existePrestamo) {
            return res.status(400).json({ message: 'Ya tienes este libro prestado' });
        }

        // Crear un nuevo préstamo
        const nuevoPrestamo = await PrestamoModel.create({
            id_libro,
            id_usuario,
            nombres,
            ap_paterno,
            ap_materno,
            domicilio,
            fecha_prestamo: new Date(),
            fecha_devolucion, 
            devuelto: false //false o true
        });

        res.status(201).json({ message: 'Libro prestado exitosamente', prestamo: nuevoPrestamo });
    } catch (error) {
        console.error("Error al prestar libro:", error);
        res.status(500).json({ message: 'Error al prestar el libro' });
    }
};
  
//RESERVAR LIBRO
  export const reservarLibro = async (req, res) => {
    try {
        const { id_libro, nombres, ap_paterno, ap_materno, estado } = req.body; 
        const id_usuario = req.id_usuario; // Id del usuario logueado
        
        // Log para verificar el usuario que quiere reservar
        console.log("ID del usuario:", id_usuario);

        // Verificar si el libro existe
        const libro = await LibroModel.findByPk(id_libro);
        console.log("Libro encontrado:", libro);

        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }

        // Checarsi el libro está disponible
        if (!libro.disponible) {
            return res.status(400).json({ message: 'El libro no está disponible para la reserva' });
        }
        //Revisar si el usuario ya hechp una reserva
        const existeReserva = await ReservaModel.findOne({
            where: { id_libro, id_usuario }
        });

        console.log("La reserva ya existe:", existeReserva);

        if (existeReserva) {
            return res.status(400).json({ message: 'Ya has reservado este libro' });
        }

        // Crear una nueva reserva
        const nuevaReserva = await ReservaModel.create({
            id_libro,
            id_usuario,
            nombres,
            ap_paterno,
            ap_materno,
            fecha_reserva: new Date(),
            estado 
        });

        res.status(201).json({ message: 'Libro reservado exitosamente', reserva: nuevaReserva });
    } catch (error) {
        console.error("Error en la función reservarLibro:", error);
        res.status(500).json({ message: 'Error al reservar el libro' });
    }
};

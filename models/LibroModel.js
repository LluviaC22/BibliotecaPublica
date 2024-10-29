//Importar conexión a la BD
import db from "../database/db.js";
//Importar sequelize
import {DataTypes} from "sequelize"

import EditorialModel from './EditorialModel.js';

const LibroModel = db.define('libros', { //Crear modelo, db instancia de sequelize que conecta a la BD
    id_libro:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    
    titulo: {
        type: DataTypes.STRING(70),
        allowNull: false //Campo que puede ser nulo, osea que no es obligatorio
    },
    autor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    isbn: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        unique: true
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    //Referencias
    id_editorial: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'editoriales', // Nombre de la tabla referenciada
            key: 'id_editorial' // Nombre de la columna en la tabla referenciada
        }
    },
})
export default LibroModel //Exportar el modelo para poder usarlo en otras partes
//Importar conexión a la BD
import db from "../database/db.js";
//Importar sequelize
import {DataTypes} from "sequelize"

const HistorialModel = db.define('historial', { //Crear modelo, db instancia de sequelize que conecta a la BD
    id_historial:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.ENUM('prestamo', 'reserva'),
        allowNull: false 
    },
    id_usuario: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'usuarios', 
            key: 'id_usuario'
        }
    },
    id_libro: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'usuarios', 
            key: 'id_usuario'
        }
    }
})
export default HistorialModel;
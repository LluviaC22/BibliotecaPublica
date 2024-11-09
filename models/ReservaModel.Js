//Importar conexión a la BD
import db from "../database/db.js";
//Importar sequelize
import {DataTypes} from "sequelize"

const ReservaModel = db.define('reservas', {
    id_reserva:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nombres: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ap_paterno: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    ap_materno: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.ENUM('activo', 'completo', 'cancelado'),
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
            model: 'libros', 
            key: 'id_libro'
        }
    }
})
export default ReservaModel

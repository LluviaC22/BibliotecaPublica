//Importar conexión a la BD
import db from '../database/db.js';
//Importar sequelize
import { DataTypes } from "sequelize";

const UsuarioModel = db.define('Usuarios',{
    id_usuario:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    id_rol: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'roles', 
            key: 'id_rol' 
        }
    }
})
export default UsuarioModel
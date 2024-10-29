//Importar conexión a la BD
import db from "../database/db.js";
//Importar sequelize
import {DataTypes} from "sequelize"

const RolModel = db.define('libros', {
    id_rol:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique:true
    },
})
export default RolModel
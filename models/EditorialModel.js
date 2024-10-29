//Importar conexión a la BD
import db from "../database/db.js";
//Importar sequelize
import {DataTypes} from "sequelize"

const EditorialModel = db.define('editoriales', {
    id_editorial:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    
})
export default EditorialModel
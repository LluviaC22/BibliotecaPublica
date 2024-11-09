import {Sequelize} from 'sequelize' //Importar sequelize 
import dotenv from 'dotenv' //Importar dotenv para variables de entorno


/*const db = new Sequelize('biblioteca', '', '', {
    host: 'localhost',
    dialect: 'mysql'
})*/

dotenv.config() //Carga las var definidas en el .env

//instancia de sequelize para la conexión a la bd
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
)


export default db
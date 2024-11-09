import express from "express"
import cors from "cors"
import dotenv from 'dotenv';

//Importar conexión a la BD
import db from "./database/db.js";
//Importar enrutador
import libroRoutes from "./routes/libros.js"

import usuarioRoutes from "./routes/usuarios.js"

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/libros', libroRoutes)

app.use('/usuarios', usuarioRoutes)




try
{
    await db.authenticate()
    console.log('Conexion a la BD')
}   
catch (error)
{
    console.log('Error de conexion:${error}')
}
/*app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})*/
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})

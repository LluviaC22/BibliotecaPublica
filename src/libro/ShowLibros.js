import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/libros'

const CompShowLibros = () => {
    const [libros, setLibro] = useState([]) //useState devuelve un valor con estado y una función para actualizar
    useEffect( ()=> {//devuelve libros y setLibros
         getLibros()
    },[])

   //Procedimiento para mostrar totos los libros

   const getLibros = async () =>{
    const res = await axios.get(URI)
    setLibro(res.data)
   }
   //Procedimiento para eliminar libro
   const deleteLibro = async (id_libro) => {
    await axios.delete(`${URI}/${id_libro}`)
    getLibros()
   }

   return(
    <div className= 'container'>
        <div className='row'>
            <div className='col'>
                <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Tittle</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map( (libro) =>(
                            <tr key={libro.id_libro}>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.isbn}</td>
                                <td>{libro.categoria}</td>
                                <td>{libro.cantidad}</td>
                                {<td>{libro.disponible}</td>}

                                <td>
                                    <Link to={`/edit/${libro.id_libro}`} className='btn btn-info'>Editar</Link>
                                    <button onClick={()=>deleteLibro(libro.id_libro)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   )
}

export default CompShowLibros
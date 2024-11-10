import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/libros'

const CompCreateLibro = () =>{
    const [titulo, setTitulo]=useState('')
    const [autor, setAutor]=useState('')
    const [isbn, setIsbn]=useState('')
    const [categoria, setCategoria]=useState('')
    const [cantidad, setCantidad]=useState('')
    const [disponible, setDisponible]=useState(true)
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {titulo:titulo, autor:autor, isbn:isbn, categoria:categoria, cantidad:cantidad, disponible:disponible})
        navigate('/' )
    }
    return(
        <div>
            <h1>CREAR POST</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input 
                        value={titulo}
                        onChange={(e)=>setTitulo(e.target.value)}//Capturando el valor que se ingresa en el input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autor</label>
                    <input 
                        value={autor}
                        onChange={(e)=>setAutor(e.target.value)}//Capturando el valor que se ingresa en el input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        value={isbn}
                        onChange={(e)=>setIsbn(Number(e.target.value))}//Capturando el valor que se ingresa en el input
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        value={categoria}
                        onChange={(e)=>setCategoria(e.target.value)}//Capturando el valor que se ingresa en el input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        value={cantidad}
                        onChange={(e)=>setCantidad(Number(e.target.value))}//Capturando el valor que se ingresa en el input
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                <input
                type="checkbox"
                checked={disponible}
                onChange={() => setDisponible(!disponible)}
                />
                </div>
                <button type='submit' className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CompCreateLibro
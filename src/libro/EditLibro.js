import axios from 'axios'
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'; 

const URI = 'http://localhost:8000/libros'

const CompEditLibro = () =>{
    const [titulo, setTitulo]=useState('')
    const [autor, setAutor]=useState('')
    const [isbn, setIsbn]=useState('')
    const [categoria, setCategoria]=useState('')
    const [cantidad, setCantidad]=useState('')
    const [disponible, setDisponible]=useState(true)
    const {id_libro} = useParams()
    const navigate = useNavigate()
    //Procedimiento para actualizar
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${URI}/${id_libro}`,{
            titulo:titulo, 
            autor:autor, 
            isbn:isbn, 
            categoria:categoria, 
            cantidad:cantidad, 
            disponible:disponible
        })
        navigate('/')
    }
    useEffect(()=>{
        getLibroById_libro()
    },[])
    const getLibroById_libro = async ()=>{
        const res = await axios.get(`${URI}/${id_libro}`)
        setTitulo(res.data.titulo)
        setAutor(res.data.autor)
        setIsbn(res.data.isbn)
        setCategoria(res.data.categoria)
        setCantidad(res.data.cantidad)
        setDisponible(res.data.disponible)

    }
    return(
        <div>
            <h1>Editar POST</h1>
            <form onSubmit={update}>
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
                <button type='submit' className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default CompEditLibro
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalogo.css';
// Importa imágenes de las categorías
import CienciasSocialesImage from './assets/Ciencias Sociales.jpeg';
import MatematicasImage from './assets/matematicas.jpeg';
import GeografiaImage from './assets/Geografia.jpeg';
import TecnologiasImage from './assets/Tecnologias.jpeg';
import LiteraturaImage from './assets/Literatura.jpeg';

const Catalogo = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/resultado-busqueda');
  };

  return (
    <div className="catalogo-container">
      <h2 className="catalogo-titulo">Catálogo de Libros</h2>
      <p className="catalogo-lead">
        Explora nuestro catálogo de libros disponible en la biblioteca pública. Busca por título, autor o categoría.
      </p>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar libros..." 
          aria-label="Buscar libros" 
        />
        <button className="search-button" type="button" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {/* Sección de categorías */}
      <h3 className="catalogo-categorias-titulo">Categorías Populares</h3>
      <div className="categorias-grid">
        <div className="categoria">
          <img 
            src={CienciasSocialesImage} 
            alt="Ciencias Sociales" 
            className="categoria-imagen" 
          />
          <div className="categoria-titulo">Ciencias Sociales</div>
        </div>
        <div className="categoria">
          <img 
            src={MatematicasImage} 
            alt="Matemáticas y Física" 
            className="categoria-imagen" 
          />
          <div className="categoria-titulo">Matemáticas y Física</div>
        </div>
        <div className="categoria">
          <img 
            src={GeografiaImage} 
            alt="Geografía e Historia" 
            className="categoria-imagen" 
          />
          <div className="categoria-titulo">Geografía e Historia</div>
        </div>
        <div className="categoria">
          <img 
            src={TecnologiasImage} 
            alt="Tecnologías" 
            className="categoria-imagen" 
          />
          <div className="categoria-titulo">Tecnologías</div>
        </div>
        <div className="categoria">
          <img 
            src={LiteraturaImage} 
            alt="Literatura y Retórica" 
            className="categoria-imagen" 
          />
          <div className="categoria-titulo">Literatura y Retórica</div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;

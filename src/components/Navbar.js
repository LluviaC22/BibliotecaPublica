import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.jpeg'; 
import perfilIcon from './assets/perfil.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/configuracion-perfil'); // Redirige a la vista de configuración del perfil
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} alt="Logo" className="profile-logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/" style={{ color: '#ffffff' }}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/catalogo" style={{ color: '#ffffff' }}>Catálogo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/historial" style={{ color: '#ffffff' }}>Historial</a>
            </li>
          </ul>
        </div>

        <div
          className="profile d-flex align-items-center"
          onClick={handleProfileClick}
          style={{ cursor: 'pointer' }}
        >
          <span className="profile-text me-2" style={{ color: '#ffffff' }}>User</span>
          <img src={perfilIcon} alt="Icono de Perfil" className="profile-icon" />
        </div>
      </div>

      <div className="navbar-title">
        <h5>MARIO HUGO MARINO ORTIZ</h5>
      </div>
    </nav>
  );
};

export default Navbar;

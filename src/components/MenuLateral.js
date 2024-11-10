// src/components/MenuLateral.js
import React from 'react';
import './MenuLateral.css';


const MenuLateral = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleMenu}>×</button>
      <ul>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Configuración</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  );
};

export default MenuLateral;

import React from "react";
import './Login.css'; 
import logo from './assets/logo.jpeg'; 

const Registro = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Registro de Usuario</h2>
        <img src={logo} alt="Logo Biblioteca" className="logo-image" />
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" className="form-control" placeholder="Ingrese su usuario" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" className="form-control" placeholder="Ingrese su correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" className="form-control" placeholder="Ingrese su contraseña" required />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;

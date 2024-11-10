import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import logo from './assets/logo.jpeg'; // Importación del logo

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Maneja el envío del formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = "usuario";
    const validPass = "contraseña123";

    if (username === validUser && password === validPass) {
      setMessage("¡Inicio de sesión exitoso!");
      setTimeout(() => {
        navigate("/"); // Redirige a la página principal después de iniciar sesión
      }, 1000);
    } else {
      setMessage("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  // Maneja el clic en el botón "Registrarse"
  const handleRegisterClick = () => {
    navigate("/registro");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Biblioteca Pública<br />Mario Hugo Marino Ortiz</h2>
        <img src={logo} alt="Logo" className="logo-image" /> {/* Logo debajo del título */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Correo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import './ConfiguracionPerfil.css'; 

const ConfiguracionPerfil = () => {
  return (
    <div className="configuracion-perfil-container">
      <h2>Configuración del Perfil</h2>
      
      <div className="perfil-card">
        <div className="perfil-info">
          <img src="/assets/perfil.png" alt="Foto de Perfil" className="perfil-foto" />
          <button className="btn-editar">Cambiar Foto</button>
        </div>
        <form className="perfil-formulario">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="******" />
          </div>
          <button className="btn-guardar">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default ConfiguracionPerfil;

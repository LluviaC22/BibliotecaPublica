// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
    }}>
      <h2 style={{
        fontSize: '3rem',
        color: '#343a40',
        marginBottom: '20px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}>
        Página no encontrada
      </h2>
      <p style={{
        fontSize: '1.5rem',
        color: '#6c757d',
        marginBottom: '30px',
        maxWidth: '600px',
        textAlign: 'center',
        lineHeight: '1.6',
      }}>
        Lo sentimos, la página que buscas no existe. Es posible que hayas escrito mal la URL o que la página haya sido movida.
      </p>
      <Link to="/historial" style={{
        fontSize: '1.5rem',
        color: '#007bff',
        textDecoration: 'none',
        padding: '10px 20px',
        border: '2px solid #007bff',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      onMouseOver={e => {
        e.target.style.backgroundColor = '#007bff';
        e.target.style.color = '#fff';
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#007bff';
      }}>
        Volver a la página de historial
      </Link>
    </div>
  );
}

export default NotFound;

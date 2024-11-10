import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#D8B38F',
      color: '#fff',
      padding: '40px 20px',
      margin: '0',
      width: '100%',
      position: 'relative',
      bottom: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'space-between', // Distribuye el contenido 
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)' // Sombra más notori
    }}>
      <div style={{ flex: '1', paddingRight: '20px' }}>
        <h3 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: '#fff',
          fontWeight: 'bold'
        }}>Contáctanos</h3>
        <p style={{
          fontSize: '16px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <FontAwesomeIcon icon={faPhone} style={{
            color: "#f5f7fa",
            marginRight: '8px',
            fontSize: '20px',
            transition: 'color 0.3s ease'
          }} />
          <span>(675) 878 1053</span>
        </p>
        <p style={{
          fontSize: '16px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <FontAwesomeIcon icon={faEnvelope} style={{
            color: "#ffffff",
            marginRight: '8px',
            fontSize: '20px',
            transition: 'color 0.3s ease'
          }} />
          <span>bibliotecapublicamariohugomari@gmail.com</span>
        </p>
        <p style={{
          fontSize: '16px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <FontAwesomeIcon icon={faLocationDot} style={{
            color: "#ffffff",
            marginRight: '8px',
            fontSize: '20px',
            transition: 'color 0.3s ease'
          }} />
          <span>Domicilio Conocido (en el Jardín Municipal), C.P. 34850</span>
        </p>
      </div>
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'flex-end', // Alineación 
        alignItems: 'center',
        paddingLeft: '20px'
      }}>
        
      </div>
    </footer>
  );
};

export default Footer;

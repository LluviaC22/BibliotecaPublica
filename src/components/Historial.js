import React from 'react';

function Historial() {
  // Datos de ejemplo para el historial
  const historialData = [
    { libro: 'De la tierra a la luna', autor: 'Julio Verney', fecha: '05/09/24 - 05/10/24' },
    // Puedes agregar más filas aquí si es necesario
  ];

  return (
    <div style={{
      backgroundColor: '#D3D3D3',
      padding: '20px',
      width: '400px',
      margin: '20px auto',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>HISTORIAL</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
      }}>
        <thead>
          <tr>
            <th style={{
              border: '1px solid black',
              padding: '8px',
              backgroundColor: '#E6E6E6',
              textAlign: 'center',
            }}>Libro</th>
            <th style={{
              border: '1px solid black',
              padding: '8px',
              backgroundColor: '#E6E6E6',
              textAlign: 'center',
            }}>Autor</th>
            <th style={{
              border: '1px solid black',
              padding: '8px',
              backgroundColor: '#E6E6E6',
              textAlign: 'center',
            }}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {historialData.map((entry, index) => (
            <tr key={index}>
              <td style={{
                border: '1px solid black',
                padding: '8px',
                textAlign: 'center',
              }}>{entry.libro}</td>
              <td style={{
                border: '1px solid black',
                padding: '8px',
                textAlign: 'center',
              }}>{entry.autor}</td>
              <td style={{
                border: '1px solid black',
                padding: '8px',
                textAlign: 'center',
              }}>{entry.fecha}</td>
            </tr>
          ))}
          {[...Array(6)].map((_, i) => (
            <tr key={`empty-${i}`}>
              <td style={{
                border: '1px solid black',
                padding: '8px',
                height: '30px',
              }}></td>
              <td style={{
                border: '1px solid black',
                padding: '8px',
              }}></td>
              <td style={{
                border: '1px solid black',
                padding: '8px',
              }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historial;

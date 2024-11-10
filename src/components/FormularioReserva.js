import React from 'react';

function FormularioReserva() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div style={{
      backgroundColor: '#D3D3D3',
      padding: '20px',
      width: '500px',
      margin: '20px auto',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        justifyItems: 'center',
      }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Nombre(s)
          <input type="text" name="nombre" style={{
            width: '200px',
            padding: '8px',
            border: '1px solid #ccc', // Borde del input
            borderRadius: '5px', // Bordes redondeados
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Apellido Paterno
          <input type="text" name="apellidoPaterno" style={{
            width: '200px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Apellido Materno
          <input type="text" name="apellidoMaterno" style={{
            width: '200px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Fecha de Reserva
          <input type="date" name="fechaReserva" style={{
            width: '200px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Fecha
          <input type="date" name="fecha" style={{
            width: '200px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
      </form>
      <button type="submit" style={{
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px solid #D8B38F', // Borde del botón
        backgroundColor: '#D8B38F', // Color de fondo del botón
        color: '#fff', // Color del texto del botón
        borderRadius: '5px', // Bordes redondeados
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Transición suave en el hover
      }} onMouseOver={e => (e.target.style.backgroundColor = '#b57c5f')} onMouseOut={e => (e.target.style.backgroundColor = '#D8B38F')}>
        Generar Reserva
      </button>
    </div>
  );
}

export default FormularioReserva;

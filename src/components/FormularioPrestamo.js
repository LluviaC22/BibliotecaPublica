import React from 'react';

function FormularioPrestamo() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <div style={{
      backgroundColor: '#D3D3D3',
      padding: '20px',
      width: '600px',
      margin: '20px auto',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Formulario de Préstamo</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        justifyItems: 'center',
      }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Nombre(s)
          <input type="text" name="nombre" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Apellido Paterno
          <input type="text" name="apellidoPaterno" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Apellido Materno
          <input type="text" name="apellidoMaterno" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Domicilio
          <input type="text" name="domicilio" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Tel.
          <input type="tel" name="telefono" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Fecha de Préstamo
          <input type="date" name="fechaPrestamo" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Fecha de Devolución
          <input type="date" name="fechaDevolucion" style={{
            width: '150px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} required />
        </label>
      </form>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        <input type="checkbox" required />
        <span style={{ marginLeft: '10px', color: '#333' }}>ME RESPONSABILIZO A ENTREGAR EN BUEN ESTADO Y A TIEMPO EL LIBRO SOLICITADO</span>
      </div>
      <button type="submit" style={{
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px solid #D8B38F',
        backgroundColor: '#D8B38F',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }} onMouseOver={e => (e.target.style.backgroundColor = '#b57c5f')} onMouseOut={e => (e.target.style.backgroundColor = '#D8B38F')}>
        Generar Ficha
      </button>
    </div>
  );
}

export default FormularioPrestamo;

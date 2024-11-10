import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ResultadoBus from './components/ResultadoBus';
import FormularioReserva from './components/FormularioReserva';
import FormularioPrestamo from './components/FormularioPrestamo';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Historial from './components/Historial';
import NotFound from './components/NotFound';
import ConfiguracionPerfil from './components/ConfiguracionPerfil';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Registro from './components/Registro'; 

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/resultado-busqueda" element={<ResultadoBus />} />
          <Route path="/formulario-reserva" element={<FormularioReserva />} />
          <Route path="/formulario-prestamo" element={<FormularioPrestamo />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/configuracion-perfil" element={<ConfiguracionPerfil />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/registro" element={<Registro />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

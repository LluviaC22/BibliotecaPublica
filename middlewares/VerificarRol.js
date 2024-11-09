import UsuarioModel from '../models/UsuarioModel.js';

export const verifyRole = (roles) => {//parámetro roles: array que tiene los roles que se permiten para acceder a la rutp
  return (req, res, next) => {
    const { id_usuario } = req; 

    if (req.path === '/perfil') {
      return next();
    }
    // Buscar el usuario en la BD y verificar su rol
    UsuarioModel.findByPk(id_usuario)
      .then((usuario) => {
        if (!usuario) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
  
        // Verificar si el rol del usuario está en los roles permitidos
        if (!roles.includes(usuario.id_rol)) {
          return res.status(403).json({ message: 'Acceso denegado, no tienes permisos' });
        }
  
        next(); // Si el rol es válido, continúa a la siguiente función
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
      });
  };
};

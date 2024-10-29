import jwt from 'jsonwebtoken';

// Middleware para verificar el token 
export const verifyToken = (req, res, next) => { //(next), pasa el control al middl que sigue
  const token = req.headers['authorization']?.split(' ')[1]; // Obtener solo el token 

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  // Verificar si el token es válido
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { //(decoded), se decodifica el contenido
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    // Si es válido, se agrega el id del usuario a req para usarlo en otras partes
    req.id_usuario = decoded.id_usuario;
    next(); // Siguente funcion
  });
};


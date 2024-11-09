import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
import nodemailer from 'nodemailer'; 
import UsuarioModel from '../models/UsuarioModel.js'; 

// RESTABLECER CONTRASEÑA
export const RestablecerContrasena = async (req, res) => {
  const { email } = req.body;

  try {
    // Verificar si el usuario existe
    const usuario = await UsuarioModel.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const token = jwt.sign({ id_usuario: usuario.id_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Configuración de SMTP de Gmail
    const transporter = nodemailer.createTransport({
      service: 'smtp@gmail',  
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS  
      }
    });

    // Enlace de restablecimiento de contraseña
    const resetLink = `http://localhost:8000/restablecer/${token}`;
    const mailOptions = {
      from: 'bibliotecapublicamariohugomari@gmail.com',  
      to: email,
      subject: 'Restablecimiento de Contraseña',
      text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: ${resetLink}`,
    };

    // Enviar correo electrónico usando Gmail
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Correo de restablecimiento enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

// Verificar token
export const VerificarTokenYRestablecerContrasena = (req, res) => {
  const { token } = req.params; // Obtener el token de los parámetros de la URL
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token no válido o expirado' });
      }
      req.id_usuario = decoded.id_usuario; 
      res.json({ message: 'Token válido, puedes proceder con el cambio de contraseña' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al verificar el token' });
  }
};

// Actualizar contraseña
export const ActualizarContrasena = async (req, res) => {
  const { token } = req.params;
  const { nuevaContrasena } = req.body; 
  try {
    // Verificar si el token es válido
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token no válido o expirado' });
      }
      const { id_usuario } = decoded; 

      // Buscar el usuario en la base de datos
      const usuario = await UsuarioModel.findByPk(id_usuario);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Encriptar la nueva contraseña
      const hashedPassword = await bcrypt.hash(nuevaContrasena, 10);

      // Actualizar la contraseña en la base de datos
      usuario.contrasena = hashedPassword;
      await usuario.save();

      res.json({ message: 'Contraseña actualizada con éxito' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la contraseña' });
  }
}


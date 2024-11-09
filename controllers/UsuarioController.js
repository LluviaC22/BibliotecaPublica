import bcrypt from 'bcrypt'; //Biblioteca para el hash de contraseñas
import jwt from 'jsonwebtoken'; //Bib para generar y verificar tokens
import UsuarioModel from '../models/UsuarioModel.js';

//FUNCIÓN DE LOGIN
export const login = async (req, res) => {
  try {
    const { email, contrasena } = req.body;

    // Buscar usuario por su email en la BD
    const usuario = await UsuarioModel.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña inválida' });
    }

    // Si la autenticación es exitosa se genera token con el idusuario y se devuelve con su info
    const token = jwt.sign({ id_usuario: usuario.id_usuario }, process.env.JWT_SECRET, {
      expiresIn: '1h', //el token es válido por 1 hora
    });

    res.json({ token, usuario: { id_usuario: usuario.id_usuario, nombre: usuario.nombre, email: usuario.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

// FUNCIÓN DE REGISTRO
export const register = async (req, res) => {
  try {
    const { nombre, email, contrasena, id_rol } = req.body;

    //Checar si el usuario ya existe
    const existingUser = await UsuarioModel.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear nuevo usuario
    const newUser = await UsuarioModel.create({
      nombre,
      email,
      contrasena: hashedPassword,
      id_rol
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', userId: newUser.id_usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}
//CRUD USUARIOS

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll({
      attributes: ['id_usuario', 'nombre', 'email', 'id_rol'] 
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

// Obtener un usuario x id
export const getUserById = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findByPk(req.params.id_usuario, {
      attributes: ['id_usuario', 'nombre', 'email', 'id_rol'] 
    });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

// Actualizar un usuario
export const updateUser = async (req, res) => {
  try {
    const { nombre, email, id_rol } = req.body;
    const usuario = await UsuarioModel.findByPk(req.params.id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await usuario.update({ nombre, email, id_rol });
    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

// Eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findByPk(req.params.id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

//ACTUALIZAR PERFIL
export const ActualizarPerfil = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const id_usuario = req.id_usuario; 

    const usuario = await UsuarioModel.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si el nuevo email ya está en uso
    if (email !== usuario.email) {
      const existingUser = await UsuarioModel.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
      }
    }

    // Actualizar el perfil
    await usuario.update({ nombre, email });

    res.json({ 
      message: 'Perfil actualizado exitosamente',
      usuario: {
        id_usuario: usuario.id_usuario,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
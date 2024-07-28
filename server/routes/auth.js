const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();
const secretKey = 'secret_key'; // TODO: agregar una clave secreta en un archivo .env

// Ruta de registro
router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const usuario = new Usuario({ nombre, email, password });
        await usuario.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar usuario', error });
    }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await usuario.comparePassword(password))) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ id: usuario._id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

// Middleware para proteger las rutas
function authMiddleware(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No autenticado' });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = decoded;
        next();
    });
}

// Ruta protegida como ejemplo
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Acceso autorizado', user: req.user });
});

module.exports = router;

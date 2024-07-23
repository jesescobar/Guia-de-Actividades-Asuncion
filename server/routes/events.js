const express = require('express');
const router = express.Router();

// Definir las rutas para eventos
router.get('/', ( res) => {
  res.send('Lista de eventos');
});

// TODO: agregar otras rutas para eventos (crear, actualizar, eliminar) pueden ir aquí


module.exports = router;
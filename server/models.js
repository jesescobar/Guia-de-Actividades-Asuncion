const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const eventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  contactoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contacto', required: true },
});

const comentarioSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  fecha: { type: Date, required: true },
  eventoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Evento', required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  direccion: { type: String, required: true },
});

const Usuario = mongoose.model('Usuario', userSchema);
const Evento = mongoose.model('Evento', eventoSchema);
const Comentario = mongoose.model('Comentario', comentarioSchema);
const Categoria = mongoose.model('Categoria', categoriaSchema);
const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = { Usuario, Evento, Comentario, Categoria, Contacto };

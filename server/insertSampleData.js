const mongoose = require('mongoose');
const { Usuario, Evento, Comentario, Categoria, Contacto } = require('./models');

const dbURI = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Conectado a MongoDB Atlas');

        const usuario = new Usuario({ nombre: 'John Doe', email: 'john@example.com', password: '123456' });
        await usuario.save();

        const categoria = new Categoria({ nombre: 'Concierto' });
        await categoria.save();

        const contacto = new Contacto({ nombre: 'Juan Perez', telefono: '123456789', email: 'juan@example.com', direccion: 'Av. Principal 123' });
        await contacto.save();

        const evento = new Evento({ titulo: 'Concierto de Rock', descripcion: 'Concierto de Rock en el estadio', fecha: new Date(), categoriaId: categoria._id, usuarioId: usuario._id, contactoId: contacto._id });
        await evento.save();

        const comentario = new Comentario({ texto: '¡Genial!', fecha: new Date(), eventoId: evento._id, usuarioId: usuario._id });
        await comentario.save();

        console.log('Documentos de ejemplo insertados');
        mongoose.connection.close();
    })
    .catch((error) => console.error('Error de conexión a MongoDB Atlas:', error));
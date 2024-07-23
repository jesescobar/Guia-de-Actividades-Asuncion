const express = require("express"); //inicializar la app con express 
const mongoose = require("mongoose"); // Inicializar la conexión a MongoDB
const cors = require("cors"); // default cors- importa cors 
const app = express(); //crear la app backend con el metodo express 

//configuracion  
const PORT =  process.env.PORT || 3001; // crear un puerto, se toma desde la variable de entorno

//escuchar la solicitud POST desde nuestros frontend en ruta /register
app.post("/Register", (req, res) => {
  console.log("Body de request", req.body);
  if(req.body) {
  res.send({message: "Recibimos tu registro"})
} else {
  res.send({ message: "No recibimos tu registro" })
}

});

// Inicializar el servidor, la aplicacion escucha el puerto que configuramos 
//con el metodo listen (puerto, callback)

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en en el puerto ${PORT}`);
}); 


// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS para permitir peticiones desde diferentes dominios
app.use( cors());

 // Definir las rutas de la API
 //...



// Importar las rutas de los eventos
const eventsRouter = require("./routes/events");
app.use("/api/events", eventsRouter);


// Conectar a MongoDB Atlas (cadena de conexion)

const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}?appName=${process.env.DB_CLUSTER}`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

//const uri =
  //"mongodb+srv://jessicaescobar:<guiaasun123>@cluster0.btnlqis.mongodb.net/";
  

// Definir un esquema y un modelo
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Rutas
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar usuario", error });
  }
});



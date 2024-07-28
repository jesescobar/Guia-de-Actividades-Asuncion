const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const app = express();

// Configuración
const PORT = process.env.PORT || 3001;
const JWT_SECRET = "tu_jwt_secreto"; // todo Guardar  en un archivo .env para producción

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());
app.use(session({
  secret: "tu_secreto_de_sesion",
  resave: false,
  saveUninitialized: true,
}));

// Conectar a MongoDB Atlas
const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}?appName=${process.env.DB_CLUSTER}`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose
  .connect(uri, clientOptions)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

// Definir un esquema y un modelo
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Rutas

// Registro de usuario
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar usuario", error });
  }
});

// Inicio de sesión de usuario
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    req.session.token = token;
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(400).json({ message: "Error al iniciar sesión", error });
  }
});

// Middleware de autenticación
const authenticate = (req, res, next) => {
  const token = req.session.token;
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token no válido" });
  }
};

// Rutas protegidas
app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "Ruta protegida accesible" });
});

// Cerrar sesión
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar sesión" });
    }
    res.json({ message: "Cierre de sesión exitoso" });
  });
});

// Inicializar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en en el puerto ${PORT}`);
});

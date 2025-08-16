import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import baristaRoutes from "./routes/barista.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/baristas", baristaRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "dbbarista",
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

import mongoose from "mongoose";

const moduloSchema = new mongoose.Schema({
    nombre: String,   // nombre del módulo
    ruta: String,     // ruta del PDF
    video: String,    // video asociado al módulo (opcional)
}, { collection: "baristas" });

export default mongoose.model("Barista", moduloSchema);

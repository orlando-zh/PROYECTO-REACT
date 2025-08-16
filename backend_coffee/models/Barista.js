import mongoose from "mongoose";

const moduloSchema = new mongoose.Schema({
  nombre1: String,
  ruta1: String,
});

const baristaSchema = new mongoose.Schema({
  modulo1: [moduloSchema],
  video1: String,
  modulo2: Array,
  modulo3: Array,
}, { collection: "baristas" });

export default mongoose.model("Barista", baristaSchema);

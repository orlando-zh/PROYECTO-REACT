import Barista from "../models/Barista.js";

// Obtener todos los documentos
export const getBaristas = async (req, res) => {
  try {
    const baristas = await Barista.find();
    res.json(baristas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nuevo documento
export const createBarista = async (req, res) => {
  try {
    const newBarista = new Barista(req.body);
    await newBarista.save();
    res.status(201).json(newBarista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

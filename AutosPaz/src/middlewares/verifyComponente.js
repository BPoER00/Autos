import Componente from "../models/Componente";

export const checkDuplicateNameComponente = async (req, res, next) => {
  const componente = await Componente.findOne({ name: req.body.name });
  const validation = [];

  if (componente && componente._id.toString() !== req.params.id) {
    validation.push(`El componente: ${req.body.name} ya existe`);
  }

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};

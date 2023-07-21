import Modelo from "../models/Modelo";

export const checkDuplicateNameModelo = async (req, res, next) => {
  const modelo = await Modelo.findOne({ name: req.body.name });
  const validation = [];

  if (!req.params.id || (modelo && modelo._id.toString() !== req.params.id))
    validation.push(
      `El modelo: ${req.body.name} ya existe con el id ${modelo._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};

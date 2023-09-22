import Modelo from "../models/Modelo";
import Marca from "../models/Marca";

export const checkDuplicateNameModelo = async (req, res, next) => {
  const modelo = await Modelo.findOne({ name: req.body.name });
  const validation = [];

  if (modelo && modelo._id.toString() !== req.params.id)
    validation.push(
      `El modelo: ${req.body.name} ya existe con el id ${modelo._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};

export const checkMarcaExisted = async (req, res, next) => {
  if (req.body.marca) {
    const marcaObtenidos = req.body.marca;
    const validation = [];

    console.log("prueha " + marcaObtenidos);
    const resultado = await Marca.findOne({ _id: marcaObtenidos });
    if (resultado === null) {
      validation.push(`Marca ${marcaObtenidos[i]} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

import Auto from "../models/Auto";
import Marca from "../models/Marca";
import Modelo from "../models/Modelo";

export const checkDuplicatePlacaAuto = async (req, res, next) => {
  const auto = await Auto.findOne({ placa: req.body.placa });
  const validation = [];

  if (auto && auto._id.toString() !== req.params.id)
    validation.push(
      `La placa: ${req.body.placa} ya existe en el auto con el id ${auto._id}`
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

    const resultado = await Marca.findOne({ name: marcaObtenidos });
    if (resultado === null) {
      validation.push(`Marca ${marcaObtenidos[i]} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

export const checkModeloExisted = async (req, res, next) => {
  if (req.body.modelo) {
    const modeloObtenidos = req.body.modelo;
    const validation = [];

    const resultado = await Modelo.findOne({ name: modeloObtenidos });
      if (resultado === null) {
        validation.push(`Modelo ${modeloObtenidos[i]} no existe`);
      }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

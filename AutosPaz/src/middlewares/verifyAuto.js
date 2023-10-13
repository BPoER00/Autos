import Auto from "../models/Auto";
import Marca from "../models/Marca";
import Modelo from "../models/Modelo";
import { TIPO_PLACA } from "../constants/tipo-placa";

export const checkDuplicatePlacaAuto = async (req, res, next) => {
  const { tipoPlaca, placa } = req.body;
  const placaCompleta = `${tipoPlaca}${placa}`;

  const auto = await Auto.findOne({ placa: placaCompleta });
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

export const checkTipoPlacaExisted = async (req, res, next) => {
  if (req.body.tipoPlaca) {
    const tipoPlacaObtenidos = req.body.tipoPlaca;
    const validation = [];

    const resultado = TIPO_PLACA.find((x) => x.name === tipoPlacaObtenidos);
    if (resultado === null) {
      validation.push(`Tipo Placa ${tipoPlacaObtenidos[i]} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

export const checkVentaExisted = async (req, res, next) => {
  if (req.body.id) {
    const VentaObtenidos = req.body.id;
    const validation = [];

    const resultado = await Auto.findOne({
      _id: VentaObtenidos,
    });

    if (resultado === null || resultado.status_buy === true) {
      validation.push(`El auto ${resultado.placa} ya fue vendido`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

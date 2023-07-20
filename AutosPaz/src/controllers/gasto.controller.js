import Gasto from "../models/Gasto";
import Auto from "../models/Auto";

export const getGasto = async (req, res) => {
  await Gasto.find()
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "Datos Obtenidos Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Datos No Fueron Obtenidos Correctamente, Error: ${error.message}`,
      });
    });
};

export const getGastoId = async (req, res) => {
  const { id } = req.params;

  await Gasto.find({ _id: id })
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "Dato Obtenido Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Obtenido Correctamente, Error: ${error.message}`,
      });
    });
};

export const postGasto = async (req, res) => {
  const { auto, descripcion } = req.body;

  const gastoNew = Gasto({
    auto,
    descripcion,
    total: 0.0,
  });

  await gastoNew
    .save()
    .then((data) => {
      res.status(201).json({
        data: data,
        message: "Dato Creado Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};

export const putGasto = async (req, res) => {
  const { id } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  Modelo.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.status(204);
    })
    .catch((e) => {
      res.status(500).json({
        data: false,
        message: `Error ${e.message}`,
      });
    });
};

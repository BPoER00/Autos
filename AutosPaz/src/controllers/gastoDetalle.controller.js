import Gasto from "../models/Gasto";
import GastoDetalle from "../models/GastosDetalle";

export const getGastoDetalle = async (req, res) => {
  await GastoDetalle.find()
    .populate("auto")
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

export const getGastoDetalleIdGasto = async (req, res) => {
  const { id } = req.params;

  await GastoDetalle.find({ gasto: id })
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

export const postGastoDetalle = async (req, res) => {
  const { auto, descripcion, precio, status } = req.body;

  const gastoDetalleNew = GastoDetalle({
    auto,
    descripcion,
    precio,
    status,
  });

  await gastoDetalleNew
    .save()
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};

export const putGastoDetalle = async (req, res) => {
  const { id } = req.params;
  const { gasto, descripcion, precio, status } = req.body;

  const gastoDetalleUpdate = GastoDetalle({
    gasto,
    descripcion,
    precio,
    status,
  });

  await GastoDetalle.findByIdAndUpdate(id, gastoDetalleUpdate)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Actualizado Correctamente, Error: ${error.message}`,
      });
    });
};

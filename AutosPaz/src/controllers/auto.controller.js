import Auto from "../models/Auto";
import Marca from "../models/Marca";
import Modelo from "../models/Modelo";
import Gasto from "../models/Gasto";
import GastosDetalle from "../models/GastosDetalle";

export const getAuto = async (req, res) => {
  await Auto.find()
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

export const getAutoPlaca = async (req, res) => {
  const { placa } = req.params;

  await Auto.find({ placa: placa })
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

export const postAuto = async (req, res) => {
  const { marca, modelo, placa, year, price } = req.body;

  const autoNew = Auto({
    placa,
    year,
  });

  const gastoNew = Gasto({
    descripcion: "Descripcion Del Los Gastos Ingresos y Egresos Del Auto",
  });

  const gastoDetalleNew = GastosDetalle({
    descripcion: "Total del costo del auto",
    precio: price,
    status: 2,
  });

  if (marca) {
    const marcaFound = await Marca.findOne({ name: { $in: marca } });
    autoNew.marca = marcaFound._id;
  }

  if (modelo) {
    const modeloFound = await Modelo.findOne({ name: { $in: modelo } });
    autoNew.modelo = modeloFound._id;
  }

  console.log(autoNew);

  new Promise(async (resolve, reject) => {
    try {
      const autoNewData = await autoNew.save();
      gastoNew.auto = autoNewData._id;
      const gastoNewData = await gastoNew.save();
      gastoDetalleNew.gasto = gastoNewData._id;
      await gastoDetalleNew.save();

      resolve();
    } catch (e) {
      reject(e);
    }
  })
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

export const putAuto = async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, placa, year } = req.body;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  const marcaUpdate = Marca({
    placa,
    year,
  });

  if (marca) {
    const marcaFound = await Marca.find({ marca: marca });
    marcaNew.marca = marcaFound.map((m) => m._id);
  }

  if (modelo) {
    const modeloFound = await Modelo.find({ modelo: modelo });
    marcaNew.modelo = modeloFound.map((m) => m._id);
  }

  Marca.findByIdAndUpdate(id, marcaUpdate)
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

export const putAutoBuyplaca = async (req, res) => {
  const { placa } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  const autoBuy = Auto.findOne({ placa: placa });

  autoBuy.status_buy = true;

  Marca.findByIdAndUpdate(id, autoBuy)
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

export const deleteAutoPlaca = async (req, res) => {
  const { placa } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  const autoDelete = Auto.findOne({ placa: placa });

  autoDelete.status = false;

  Marca.findByIdAndUpdate(id, autoDelete)
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

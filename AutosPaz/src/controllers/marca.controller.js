import Marca from "../models/Marca";

export const getMarca = async (req, res) => {
  await Marca.find()
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

export const getMarcaId = async (req, res) => {
  const { id } = req.params;

  await Marca.find({ _id: id })
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

export const postMarca = async (req, res) => {
  const { name } = req.body;

  const marcaNew = Marca({
    name,
  });

  await marcaNew
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

export const putMarca = async (req, res) => {
  const { id } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  Marca.findByIdAndUpdate(id, req.body)
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


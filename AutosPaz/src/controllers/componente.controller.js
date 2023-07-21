import Componente from "../models/Componente";

export const getComponente = async (req, res) => {
  await Componente.find()
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

export const getComponenteId = async (req, res) => {
  const { id } = req.params;

  await Componente.find({ _id: id })
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

export const postComponente = async (req, res) => {
  const { name, description } = req.body;

  const componenteNew = Componente({
    name,
    description
  });

  await componenteNew
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

export const putComponente = async (req, res) => {
  const { id } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  Componente.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.status(204).send();
    })
    .catch((e) => {
      res.status(500).json({
        data: false,
        message: `Error ${e.message}`,
      });
    });
};


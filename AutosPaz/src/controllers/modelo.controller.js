import Modelo from "../models/Modelo";
import { ObjectId } from "mongoose";

export const getModelo = async (req, res) => {
  await Modelo.find()
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

export const getModeloId = async (req, res) => {
  const { id } = req.params;

  await Modelo.find({ marca: id })
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

export const postModelo = async (req, res) => {
  const { name, marca } = req.body;
  const modeloNew = Modelo({
    name,
    marca,
  });

  console.log(marca);
  await modeloNew
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

export const putModelo = async (req, res) => {
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

import Auto from "../models/Auto";
import Componente from "../models/Componente";
import Revision from "../models/Revision";
import Marca from "../models/Marca";
import Modelo from "../models/Modelo";

export const getRevision = async (req, res) => {
  await Revision.find()
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

export const getRevisionId = async (req, res) => {
  const { id } = req.params;

  await Revision.find({ _id: id })
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

export const getRevisionPorAuto = async (req, res) => {
  try {
    const revisionCountByPlaca = await Revision.aggregate([
      {
        $lookup: {
          from: "autos", // Nombre de la colección "Auto"
          localField: "auto",
          foreignField: "_id",
          as: "autoData",
        },
      },
      {
        $unwind: "$autoData",
      },
      {
        $group: {
          _id: "$autoData.placa",
          cantidad: { $sum: 1 },
        },
      },
      {
        $project: {
          placa: "$_id",
          cantidad: 1,
          _id: 0,
        },
      },
    ]);

    res.json(revisionCountByPlaca);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const postRevision = async (req, res) => {
  const { auto, componente, descripcion, status } = req.body;

  const revisionNew = Revision({
    descripcion,
    status,
  });

  if (auto) {
    const autoFound = await Auto.findOne({ placa: { $in: auto } });
    revisionNew.auto = autoFound._id;
  }

  if (componente) {
    const componenteFound = await Componente.findOne({
      _id: { $in: componente },
    });
    revisionNew.componente = componenteFound._id;
  }

  await revisionNew
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

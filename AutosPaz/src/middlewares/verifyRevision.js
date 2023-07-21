import Auto from "../models/Auto";
import Componente from "../models/Componente";
import Revision from "../models/Revision";

export const checkAutoExisted = async (req, res, next) => {
    if (req.body.auto) {
      const autoObtenidos = req.body.auto;
      const validation = [];
  
      const resultado = await Auto.findOne({ placa: autoObtenidos });
      if (resultado === null) {
        validation.push(`El auto ${marcaObtenidos[i]} no existe`);
      }
  
      if (validation.length > 0) {
        return res.status(400).json({ message: validation });
      }
    }
  
    next();
  };
  
  export const checkComponenteExisted = async (req, res, next) => {
    if (req.body.componente) {
      const componenteObtenidos = req.body.componente;
      const validation = [];
  
      const resultado = await Componente.findOne({ _id: componenteObtenidos });
        if (resultado === null) {
          validation.push(`El componente ${modeloObtenidos[i]} no existe`);
        }
  
      if (validation.length > 0) {
        return res.status(400).json({ message: validation });
      }
    }
  
    next();
  };
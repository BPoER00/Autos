import Gasto from "../models/Gasto";

export const checkGastoExisted = async (req, res, next) => {
    if (req.body.gasto) {
      const gastoObtenidos = req.body.gasto;
      const validation = [];
  
      const resultado = await Gasto.findOne({ _id: gastoObtenidos });
      if (resultado === null) {
        validation.push(`Gasto no existe`);
      }
  
      if (validation.length > 0) {
        return res.status(400).json({ message: validation });
      }
    }
  
    next();
  };
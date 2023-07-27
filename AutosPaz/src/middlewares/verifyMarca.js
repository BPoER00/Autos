import Marca from "../models/Marca";

export const checkDuplicateNameMarca = async (req, res, next) => {
    const marca = await Marca.findOne({ name: req.body.name });
    const validation = [];
  
    if (marca && marca._id.toString() !== req.params.id)
      validation.push(
        `La marca: ${req.body.name} ya existe con el id ${marca._id}`
      );
  
    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  
    next();
  };
  
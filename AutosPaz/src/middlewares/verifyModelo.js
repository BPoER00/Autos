export const checkDuplicateNameModelo = async (req, res, next) => {
  const modelo = await Modelo.findOne({ name: req.body.name });
  const validation = [];

  if (modelo)
    validation.push(
      `El modelo: ${req.body.username} ya existe con el id ${modelo._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};

import Rol from "../models/Rol";
import User from "../models/User";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  const email = await User.findOne({ email: req.body.email });
  const validation = [];

  if (user && user._id.toString() !== req.params.id)
    validation.push(`El username: ${req.body.username} ya esta en uso`);
  if (email && email._id.toString() !== req.params.id)
    validation.push(`El email: ${req.body.email} ya esta en uso`);

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};

export const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    const rolesObtenidos = req.body.roles;
    const validation = [];

    for (let i = 0; i < rolesObtenidos.length; i++) {
      const resultado = await Rol.findOne({ name: rolesObtenidos[i] });
      if (resultado === null) {
        validation.push(`Rol ${rolesObtenidos[i]} no existe`);
      }
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

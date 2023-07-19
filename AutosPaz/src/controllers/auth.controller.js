import User from "../models/User";
import config from "../config";
import jwt from "jsonwebtoken";
import Rol from "../models/Rol";

export const singUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const userNew = User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRol = await Rol.find({ name: { $in: roles } });
    userNew.roles = foundRol.map((r) => r._id);
  } else {
    const noFoundRol = await Rol.FindOne({ name: "user" });
    userNew.roles = [noFoundRol._id];
  }

  await userNew
    .save()
    .then((data) => {
      const token = jwt.sign({ id: data._id }, config.SECRET, {
        expiresIn: 86400,
      });

      res.status(201).json({
        data: token,
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

export const singIn = async (req, res) => {
  const userFound = await User.findOne({
    username: req.body.username,
  }).populate("roles");

  if (!userFound) res.status(400).json({ message: "user not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "invalid password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  return res.status(201).json({ token: token, message: "success" });
};

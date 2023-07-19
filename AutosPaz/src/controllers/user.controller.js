import User from "../models/User";
import Rol from "../models/Rol";

export const getUsers = async (req, res) => {
  await User.find()
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

export const getUsersActive = async (req, res) => {
  await User.find({ status: true })
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

export const getUsersId = async (req, res) => {
  const { id } = req.params;

  await User.findOne({ _id: id })
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

export const postUsers = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const userNew = User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRol = await Rol.find({ name: { $in: roles } });
    userNew.roles = foundRol.map((role) => role._id);
  } else {
    const noFoundRol = await Rol.findOne({ name: "user" });
    userNew.roles = [noFoundRol._id];
  }

  await userNew
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

export const putUsersIdPassword = async (req, res) => {
  const { id } = req.params;
  const { password_past } = req.query;
  const { password } = req.body;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  if (!password_past)
    res.status(400).json({ message: "Error id no fue ingresado" });

  const result = User.findOne({ _id: id });

  if (result) {
    const matchPassword = await User.comparePassword(
      password_past,
      result.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "invalid password" });

    const updateUserPassword = User({
      username: result.username,
      email: result.email,
      password: await User.encryptPassword(password),
    });

    User.findByIdAndUpdate(id, updateUserPassword)
      .then(() => {
        res.status(204);
      })
      .catch((e) => {
        res.status(500).json({
          data: false,
          message: `Error ${e.message}`,
        });
      });
  }
};

export const putUsersId = async (req, res) => {
  const { id } = req.params;

  if (!id) res.status(400).json({ message: "Error id no fue ingresado" });

  User.findByIdAndUpdate(id, req.body)
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

export const deleteUsersId = async (req, res) => {
  const { id } = req.params;

  const result = await User.findOne({ _id: id });

  result.status = false;

  User.findByIdAndUpdate(id, result)
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

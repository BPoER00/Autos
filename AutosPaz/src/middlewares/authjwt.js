import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Rol from "../models/Rol";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provider" });

    const decoded = jwt.verify(token, config.SECRET);
    req.id = decoded.id;

    const userFound = await User.findById(req.id, { password: 0 });

    if (!userFound) return res.status(404).json({ message: "no user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: `Unauthorized` });
  }
};

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.id);
  const roles = await Rol.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }

  return res.status(403).json({
    message: "Requires permisos de [moderador] para realizar esta accion",
  });
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.id);
  const roles = await Rol.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({
    message: "Requires permisos de [admin] para realizar esta accion",
  });
};

import Rol from "../models/Rol";
import User from "../models/User";

export const createRoles = async () => {
  const count = await Rol.estimatedDocumentCount();

  if (count > 0) return;

  await Promise.all([
    new Rol({
      name: "user",
      status: true,
    }).save(),
    new Rol({
      name: "moderator",
      status: true,
    }).save(),
    new Rol({
      name: "admin",
      status: true,
    }).save(),
  ])
    .then((data) => {
      console.log(`Resultado: ${data}`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};

export const createUser = async () => {
  const count = await User.estimatedDocumentCount();

  if (count > 0) return;

  const data = await Rol.find();

  await Promise.all([
    new User({
      username: "admin",
      email: "admin@gmail.com",
      password: await User.encryptPassword("admin"),
      roles: [`${data[0]._id}`, `${data[1]._id}`, `${data[2]._id}`],
      status: true,
    }).save(),
  ])
    .then((data) => {
      console.log(`Resultado: ${data}`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};

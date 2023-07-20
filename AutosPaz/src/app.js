import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json";
import { createRoles, createUser } from "./libs/initialSetup";

import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import autoRouter from "./routes/auto.routes";
import marcaRouter from "./routes/marca.routes";
import modeloRouter from "./routes/modelo.routes";

//inicializamos
const app = express();
createRoles();
createUser();

//asignamos puerto
app.set("pkg", pkg);
app.set("port", process.env.PORT || 3000);

//cors
const corsOptions = {};
app.use(cors(corsOptions));

//morgan
app.use(morgan("dev"));

//recibir datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/auth", authRouter);

app.use("/api/users", userRouter);

app.use("/api/auto", autoRouter);

app.use("/api/marca", marcaRouter);

app.use("/api/modelo", modeloRouter);

export default app;

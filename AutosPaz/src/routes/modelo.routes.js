import { Router } from "express";
import * as modeloController from "../controllers/modelo.controller";
import { authjwt, verifyModelo } from "../middlewares/index";

const router = Router();

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  modeloController.getModelo
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  modeloController.getModeloId
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyModelo.checkDuplicateNameModelo,
  ],
  modeloController.postModelo
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyModelo.checkDuplicateNameModelo,
  ],
  modeloController.putModelo
);

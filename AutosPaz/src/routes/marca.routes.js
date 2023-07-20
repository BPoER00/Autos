import { Router } from "express";
import * as marcaController from "../controllers/marca.controller";
import { authjwt, verifyMarca } from "../middlewares/index";

const router = Router();

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  marcaController.getMarca
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  marcaController.getMarcaId
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyMarca.checkDuplicateNameMarca,
  ],
  marcaController.postMarca
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyMarca.checkDuplicateNameMarca,
  ],
  marcaController.putMarca
);

export default router;

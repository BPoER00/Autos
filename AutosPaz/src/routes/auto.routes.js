import { Router } from "express";
import * as autoController from "../controllers/auto.controller";
import { authjwt, verifyAuto } from "../middlewares/index";

const router = Router();

router.get(
  "/Dashboard",
  [authjwt.verifyToken],
  autoController.getAutoMarca
);

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  autoController.getAuto
);

router.get(
  "/:placa",
  [authjwt.verifyToken, authjwt.isModerator],
  autoController.getAuto
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyAuto.checkDuplicatePlacaAuto,
    verifyAuto.checkMarcaExisted,
    verifyAuto.checkModeloExisted,
  ],
  autoController.postAuto
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifyAuto.checkDuplicatePlacaAuto,
    verifyAuto.checkMarcaExisted,
    verifyAuto.checkModeloExisted,
  ],
  autoController.putAuto
);

router.put(
  "/:id",
  [authjwt.verifyToken, authjwt.isAdmin],
  autoController.putAutoBuyplaca
);

router.delete(
  "/:id",
  [authjwt.verifyToken, authjwt.isAdmin],
  autoController.deleteAutoPlaca
);

export default router;

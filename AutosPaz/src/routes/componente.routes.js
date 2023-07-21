import { Router } from "express";
import * as componenteController from "../controllers/componente.controller";
import { authjwt, verifyComponente } from "../middlewares/index";

const router = Router();

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  componenteController.getComponente
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  componenteController.getComponenteId
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyComponente.checkDuplicateNameComponente
  ],
  componenteController.postComponente
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyComponente.checkDuplicateNameComponente
  ],
  componenteController.putComponente
);

export default router;

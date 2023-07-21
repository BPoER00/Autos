import { Router } from "express";
import * as gastoController from "../controllers/gasto.controller";
import { authjwt } from "../middlewares/index";

//inicializamos
const router = Router();

//routes
router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  gastoController.getGasto
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  gastoController.getGastoId
);

export default router;

import { Router } from "express";
import * as gastoDetalleController from "../controllers/gastoDetalle.controller";
import { authjwt, verifyGastoDetalle } from "../middlewares/index";

const router = Router();

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  gastoDetalleController.getGastoDetalle
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  gastoDetalleController.getGastoDetalleIdGasto
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyGastoDetalle.checkGastoExisted,
  ],
  gastoDetalleController.postGastoDetalle
);

router.put(
  "/:id",
  [authjwt.verifyToken, authjwt.isAdmin, verifyGastoDetalle.checkGastoExisted],
  gastoDetalleController.putGastoDetalle
);

export default router;

import { Router } from "express";
import * as revisionController from "../controllers/revision.controller";
import { authjwt, verifyRevision } from "../middlewares/index";

const router = Router();

router.get(
  "/revisiones",
  [authjwt.verifyToken],
  revisionController.getRevisionPorAuto
);

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isModerator],
  revisionController.getRevision
);

router.get(
  "/:id",
  [authjwt.verifyToken, authjwt.isModerator],
  revisionController.getRevisionId
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isModerator,
    verifyRevision.checkAutoExisted,
    verifyRevision.checkComponenteExisted,
  ],
  revisionController.postRevision
);

export default router;

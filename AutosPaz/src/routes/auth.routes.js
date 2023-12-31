import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
import { authjwt, verifySignup } from "../middlewares/index";

//inicializamos
const router = Router();

//routes
router.get("/logout", [authjwt.verifyToken], AuthController.logOut);

router.get("/verified", [authjwt.verifyToken], AuthController.getValidation);

router.post(
  "/signup",
  [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExisted,
  ],
  AuthController.singUp
);

router.post("/signin", AuthController.singIn);

export default router;

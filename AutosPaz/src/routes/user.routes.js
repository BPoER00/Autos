import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authjwt, verifySignup } from "../middlewares/index";

const router = Router();

router.get(
  "/",
  [
    authjwt.verifyToken, 
    authjwt.isModerator
  ],
  userController.getUsers
);

router.get(
  "/active",
  [
    authjwt.verifyToken, 
    authjwt.isModerator
  ],
  userController.getUsersActive
)

router.get(
  "/:id",
  [
    authjwt.verifyToken, 
    authjwt.isModerator
  ],
  userController.getUsersId
);

router.post(
  "/",
  [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExisted,
  ],
  userController.postUsers
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExisted,
  ],
  userController.putUsersIdPassword
);

router.put(
  "/:id",
  [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExisted,
  ],
  userController.putUsersId
);

router.delete(
  "/:id",
  [
    authjwt.verifyToken, 
    authjwt.isAdmin
  ],
  userController.deleteUsersId
);

export default router;

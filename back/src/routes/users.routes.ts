import { Router } from "express";
import { createUserSchema } from "../schemas/user.schema";
import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middleware";
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/user.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureUserExistsMiddeware from "../middlewares/user/ensureUserExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddeware(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
usersRoutes.get("", ensureTokenIsValidMiddleware, readUserController);
usersRoutes.patch(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  ensureEmailIsUniqueMiddleware,
  updateUserController
);
usersRoutes.delete(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  deleteUserController
);

export { usersRoutes };

import { Router } from "express";
import { createUserSchema } from "../schemas/user.schema";
import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middleware";
import { createUserController, deleteUserController, readUserController, updateUserController } from "../controllers/user.controller";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
import ensureUserExistsMiddeware from "../middlewares/user/ensureUserExists.middleware";
import multer from "multer";
import multerConfig from "../multerConfig";

const upload = multer(multerConfig)
const usersRoutes = Router();

// usersRoutes.post("/upload", upload.single("file"), createProfilePhotoController )

usersRoutes.post(
  "",
  ensureDataIsValidMiddeware(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
usersRoutes.get("", ensureTokenIsValidMiddleware, readUserController);
usersRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  ensureEmailIsUniqueMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  deleteUserController
);


export { usersRoutes };
import { Router } from "express";
import {
  createUserPhotoController,
  readUserPhotoController,
} from "../controllers/image.controller";
import multer from "multer";
import multerConfig from "../multerConfig";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";

const upload = multer(multerConfig);
const imageRoutes = Router();

imageRoutes.post(
  "/user/profile",
  ensureTokenIsValidMiddleware,
  upload.single("file"),
  createUserPhotoController
);

imageRoutes.get(
  "/user/profile",
  ensureTokenIsValidMiddleware,
  readUserPhotoController
);

export { imageRoutes };

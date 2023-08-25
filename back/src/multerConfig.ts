import { FileFilterCallback } from "multer";
import { Request } from "express";

export default {
  fileFilter: (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ) => {
    const acceptedTypes = file.mimetype;

    if (acceptedTypes === "image/jpeg" || acceptedTypes === "image/png") {
      callback(null, true);
    } else {
      callback(null, false);
      callback(new Error("Only jpeg or png format allowed"));
    }
  },
};

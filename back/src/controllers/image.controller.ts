import { Request, Response } from "express";
import createOrUpdateImageService from "../services/image/createOrUpdateImage.service";
import readImageService from "../services/image/readImage.service";

const createUserPhotoController = async (req: Request, res: Response) => {
  try {
    const file = req.file?.buffer;
    const userId = req.user.id;

    const imageBase64String = await createOrUpdateImageService(userId, file);

    return res.status(200).json(imageBase64String);
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error uploading image" });
  }
};

const readUserPhotoController = async (req: Request, res: Response) => {
  try {
    const userID = req.user.id;
    const imageFound = await readImageService(userID);

    res.json(imageFound);
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error find User Image" });
  }
};

export { createUserPhotoController, readUserPhotoController };

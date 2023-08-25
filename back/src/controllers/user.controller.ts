import { Request, Response, response } from "express";
import createUserService from "../services/user/createUser.service";
import readUserService from "../services/user/readUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const userCreated = await createUserService(userData);

    return res.status(201).json(userCreated);
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error create user" });
  }
};

const readUserController = async (req: Request, res: Response) => {
  try {
    const userID = req.user.id;
    const userFound = await readUserService(userID);

    res.json(userFound);
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error find user" });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = req.user.id;

    const userUpdated = await updateUserService(userData, userId);

    return res.status(200).json(userUpdated);
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error update user" });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    await deleteUserService(userId);

    return res.status(204).send();
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error delete user" });
  }
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  readUserController,
};

import { Request, Response, response } from "express";
import createUserService from "../services/user/createUser.service";
import readUserService from "../services/user/readUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const userCreated = await createUserService(userData);

  return res.status(201).json(userCreated);
};
// const createProfilePhotoController = async (req: Request, res: Response) => {
//   try {
//     const userRepository = AppDataSource.getRepository(User);
//     const imageRepository = AppDataSource.getRepository(Image);

//     const user = await userRepository.findOne({ where: { id: req.user.id }}); 
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // const image = imageRepository.create({
//     //   imageName: req.file!.filename,
//     //   user: user,
//     // });

//     await imageRepository.save(image);

//     return res.json("Image uploaded successfully");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Error uploading image" });
//   }


// };



const readUserController = async (req: Request, res: Response) => {
  const userID = req.user.id
  const allUsers = await readUserService(userID);

  res.json(allUsers);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = req.params.id;

  const userUpdated = await updateUserService(userData, userId);
  return res.status(200).json(userUpdated);
};
const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  readUserController,
};
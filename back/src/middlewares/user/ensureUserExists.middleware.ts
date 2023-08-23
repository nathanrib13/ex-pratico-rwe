import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/users.entity";


const ensureUserExistsMiddeware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userID = req.params.id;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({ where: { id: userID } });
  if (!findUser) {
    throw new AppError("user not found", 404);
  }

  return next();
};

export default ensureUserExistsMiddeware;
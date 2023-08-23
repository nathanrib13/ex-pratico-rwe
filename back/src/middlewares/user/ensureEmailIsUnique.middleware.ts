import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/users.entity";

const ensureEmailIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
 const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (!req.body.email && !req.body.phone) {
    return next();
  }

  const findMail = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (findMail && findMail.id !== req?.user?.id) {
    throw new AppError("Email  already exists", 409);
  }
  

  return next();
};

export default ensureEmailIsUniqueMiddleware;
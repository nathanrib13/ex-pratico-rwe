import { Repository } from "typeorm";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import ILogin from "../../interfaces/login.interface";
import { AppError } from "../../errors";
import { User } from "../../entities/users.entity";
import jwt from "jsonwebtoken";

const loginService = async (loginData: ILogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });
  if (!user) {
    throw new AppError("invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};

export default loginService;

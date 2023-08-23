import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IReadUserReturn } from "../../interfaces/user.interface";
import { AppError } from "../../errors";
import { readUserSchemaReturn } from "../../schemas/user.schema";
import { User } from "../../entities/users.entity";


const readUserService = async (userID: string): Promise<IReadUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: userID },
  });

  if (!findUser) {
    throw new AppError("user not found");
  }

  const userFound = readUserSchemaReturn.parse(findUser);


  const userWithContacts = { ...userFound };

  return userWithContacts;
};

export default readUserService;
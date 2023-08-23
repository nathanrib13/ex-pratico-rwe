import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { createUserSchemaReturn } from "../../schemas/user.schema";
import { IUserRequest, IUserReturn } from "../../interfaces/user.interface";
import { User } from "../../entities/users.entity";


const createUserService = async (
  userData: IUserRequest
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = userRepository.create(userData);
  await userRepository.save(user);
  const newUser = createUserSchemaReturn.parse(user);
  return newUser;
};

export default createUserService;
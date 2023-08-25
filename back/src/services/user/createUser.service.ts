import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { createUserSchemaReturn } from "../../schemas/user.schema";
import { IUserRequest, IUserReturn } from "../../interfaces/user.interface";
import { User } from "../../entities/users.entity";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userInsert = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    about: userData.about ?? null,
    facebook: userData.facebook ?? null,
    twitter: userData.twitter ?? null,
    linkedin: userData.linkedin ?? null,
    instagram: userData.instagram ?? null,
  };

  const user = userRepository.create(userInsert);
  await userRepository.save(user);
  const newUser = createUserSchemaReturn.parse(user);
  return newUser;
};

export default createUserService;

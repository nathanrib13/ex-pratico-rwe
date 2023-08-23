import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IUserRequest, IUserReturn } from "../../interfaces/user.interface";
import { createUserSchemaReturn, userUpdateSchema } from "../../schemas/user.schema";
import { User } from "../../entities/users.entity";


const updateUserService = async (
  userData: IUserRequest,
  userId: string
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({ id: userId });
  const updateResquested: any = userUpdateSchema.parse(userData);

  const user = userRepository.create({
    ...userToUpdate,
    ...updateResquested,
  });
  await userRepository.save(user);
  const userUpdated = createUserSchemaReturn.parse(user);

  return userUpdated;
};

export default updateUserService;
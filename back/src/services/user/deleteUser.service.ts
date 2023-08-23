import { Repository } from "typeorm";
import { AppError } from "../../errors";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";


const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userToDelete = await userRepository.findOne({ where: { id: userId } });
  if (!userToDelete) {
    throw new AppError("user not found", 404);
  }

  await userRepository.remove(userToDelete);
};

export default deleteUserService;
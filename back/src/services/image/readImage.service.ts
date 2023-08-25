import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Image } from "../../entities/images.entity";

const readImageService = async (userID: string): Promise<string> => {
  const imageRepository: Repository<Image> = AppDataSource.getRepository(Image);

  const findUserImage = await imageRepository.findOne({
    where: { userId: userID },
  });

  if (!findUserImage) {
    throw new AppError("User image not found", 400);
  }

  return findUserImage.image;
};

export default readImageService;

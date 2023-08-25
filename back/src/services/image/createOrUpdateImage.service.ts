import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Image } from "../../entities/images.entity";
import sharp from "sharp";
import { AppError } from "../../errors";

const createOrUpdateImageService = async (
  userId: string,
  file: Buffer | undefined
): Promise<String> => {
  const imageRepository: Repository<Image> = AppDataSource.getRepository(Image);

  if (!file) {
    throw new AppError("image not send", 404);
  }

  const resizedImageBuffer = await sharp(file)
    .resize({ width: 400, height: 400 })
    .toBuffer();

  const imageBase64String = resizedImageBuffer.toString("base64");

  const findUserImage = await imageRepository.findOne({
    where: { userId },
  });

  if (findUserImage) {
    findUserImage.image = imageBase64String;
    await imageRepository.save(findUserImage);
    return imageBase64String;
  }

  const userImage = imageRepository.create({
    userId,
    image: imageBase64String,
  });
  await imageRepository.save(userImage);
  return imageBase64String;
};

export default createOrUpdateImageService;

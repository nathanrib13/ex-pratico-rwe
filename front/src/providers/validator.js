import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
});

const instagramRegex = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9._]+\/?$/;
const twitterRegex = /^https:\/\/www\.twitter\.com\/[a-zA-Z0-9_]+\/?$/;
const facebookRegex = /^https:\/\/www\.facebook\.com\/[a-zA-Z0-9.-]+\/?$/;
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;

const registerSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  password: z.string(),
  about: z.string(),
  facebook: z
    .string()
    .regex(facebookRegex, "Insira uma URL válida do Facebook").optional(),
  twitter: z.string().regex(twitterRegex, "Insira uma URL válida do Twitter").optional(),
  linkedin: z.string().regex(linkedinRegex, "Insira uma URL válida do Twitter").optional(),
  instagram: z
    .string()
    .regex(instagramRegex, "Insira uma URL válida do Instagram").optional(),
  image: z.string().optional(),
});

const updateUserSchema = registerSchema.partial();

export { loginSchema, registerSchema, updateUserSchema };

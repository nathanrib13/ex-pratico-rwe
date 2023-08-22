import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
});

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email("Insira um email válido"),
  phone: z.string(),
  password: z.string().nonempty("Senha obrigatória"),
});

const updateUserSchema = registerSchema.partial();

const newContactSchema = z.object({
  name: z.string(),
  email: z.string().email("Insira um email válido"),
  phone: z.string(),
});

export { loginSchema, registerSchema, newContactSchema, updateUserSchema };

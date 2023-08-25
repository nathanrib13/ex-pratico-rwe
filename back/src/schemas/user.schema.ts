import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  password: z.string(),
  about: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  linkedin: z.string().optional().nullable(),
  instagram: z.string().optional().nullable(),
});

const createUserSchemaReturn = createUserSchema.omit({ password: true });

const userUpdateSchema = z.object({
  name: z.string().max(65).optional(),
  email: z.string().email().max(75).optional(),
  about: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  linkedin: z.string().optional().nullable(),
  instagram: z.string().optional().nullable(),
});

const readUserSchemaReturn = createUserSchemaReturn;
export {
  createUserSchema,
  createUserSchemaReturn,
  userUpdateSchema,
  readUserSchemaReturn,
};

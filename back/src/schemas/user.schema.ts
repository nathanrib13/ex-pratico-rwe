import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  password: z.string(),
  about: z.string(),
  facebook: z.string(),
  twitter: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  image: z.string(),

});

const createUserSchemaReturn = createUserSchema
;

const userUpdateSchema = z.object({
  name: z.string().max(65).optional(),
  email: z.string().email().max(75).optional(),
  phone: z.string().max(12).optional(),
  password: z.string().optional(),
});

const readUserSchemaReturn = createUserSchemaReturn
export {
  createUserSchema,
  createUserSchemaReturn,
  userUpdateSchema,
  readUserSchemaReturn,
};
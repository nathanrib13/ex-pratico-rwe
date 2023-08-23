import { z } from "zod";
import { createUserSchema, createUserSchemaReturn } from "../schemas/user.schema";


type IUserRequest = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;
type IUserInfo = { id: number};
type IReadUserReturn = z.infer<typeof createUserSchemaReturn>;

export { IUserRequest, IUserReturn, IUserInfo, IReadUserReturn };
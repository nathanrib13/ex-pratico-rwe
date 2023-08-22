"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
// import {
//   createUserController,
//   updateUserController,
//   deleteUserController,
//   readUserController,
// } from "../controllers/users.controller";
// import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
// import { createUserSchema } from "../schemas/users.schemas";
// import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middlewares copy";
// import ensureUserExistsMiddeware from "../middlewares/user/ensureUserExists.middlewares";
// import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post("");
usersRoutes.get("");
usersRoutes.patch("/:id");
usersRoutes.delete("/:id");

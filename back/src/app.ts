import "express-async-errors";

import { loginRoutes } from "./routes/login.routes";
import { usersRoutes } from "./routes/users.routes";
import { imageRoutes } from "./routes/image.routes";
import { handleErrors } from "./errors";
import swaggerDocument from "./swagger.json";
import express = require("express");
import cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static("uploads"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/image", imageRoutes);
app.use(handleErrors);

export default app;

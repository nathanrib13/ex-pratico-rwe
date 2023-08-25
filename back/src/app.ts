import "express-async-errors";

import { loginRoutes } from "./routes/login.routes";
import { usersRoutes } from "./routes/users.routes";
import { imageRoutes } from "./routes/image.routes";
import { handleErrors } from "./errors";
import express = require("express");
import cors = require("cors");

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static("uploads"));

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/image", imageRoutes);
app.use(handleErrors);

export default app;

import "dotenv/config";
import path = require("path");
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  return {
    type: "postgres",
    host: process.env.DB_HOST!!,
    port: parseInt(process.env.DB_PORT!!),
    username: process.env.DB_USER!!,
    password: process.env.DB_PASSWORD!!,
    database: process.env.DB_NAME!!,
    synchronize: true,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const path = require("path");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dataSourceConfig = () => {
    const entitiesPath = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPath = path.join(__dirname, "./migrations/**.{ts,js}");
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        throw new Error("Env var DATABASE_URL does not exists");
    }
    const nodeEnv = process.env.NODE_ENV;
    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath],
    };
};
const AppDataSource = new typeorm_1.DataSource(dataSourceConfig());
exports.AppDataSource = AppDataSource;

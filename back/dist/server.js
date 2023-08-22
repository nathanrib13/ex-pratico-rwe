"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("database connected");
    const nodeEnv = process.env.NODE_ENV;
    app_1.default.listen(3000, () => {
        console.log("server is running");
    });
})
    .catch((err) => {
    console.log(err);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.AppError = void 0;
const zod_1 = require("zod");
class AppError extends Error {
    statusCode;
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const handleErrors = (err, req, res, _) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    if (err instanceof zod_1.ZodError) {
        const message = err.flatten().fieldErrors;
        return res.status(400).json({ message });
    }
    console.log(err);
    return res.status(500).json({ message: "internal server error" });
};
exports.handleErrors = handleErrors;

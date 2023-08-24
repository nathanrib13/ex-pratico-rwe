
import { resolve } from "node:path"
import multer, { FileFilterCallback } from "multer"
import { Request } from "express"

const tmpFolder = resolve(__dirname,  "..", "tmp")

const fileSize = 1 * 1024 * 1024

export default {
    tmpFolder,

    fileFilter: (
        request: Request,
        file: Express.Multer.File,
        callback: FileFilterCallback
    ) => {
        const acceptedTypes = file.mimetype

        if (acceptedTypes === "image/jpeg" || acceptedTypes === "image/png") {
            callback(null, true)
        }
        else {
            callback(null, false)
            callback(new Error("Only jpeg or png format allowed"))

        }
    },

    limits: {
        fileSize
    },

    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (_, file, callback) => {
            const time = new Date().getTime()
            const filename = `${file.originalname}${time}`

            return callback(null, filename)
        }
    })


}
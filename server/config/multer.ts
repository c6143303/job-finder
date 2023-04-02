import * as multer from "multer";
import * as path from "path";
import {FileFilterCallback} from "multer";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + extension
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

export const cvFileFilter = (req, file: Express.Multer.File, callback: multer.FileFilterCallback): void => {
    if (file.mimetype.search('application') >= 0) {
        callback(null, true)
    } else {
        callback(new Error('wrong format'))
    }
}

export const avatarFileFilter = (req, file: Express.Multer.File, callback: multer.FileFilterCallback): void => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        return callback(null, true)
    } else {
        callback(new Error('wrong format'))
    }
}
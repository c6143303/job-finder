const uploadRouter = require('express').Router()
import UploadController from "../controller/uploadController";
import * as multer from 'multer'
import {avatarFileFilter, cvFileFilter, storage} from "../config/multer";
const uploadCv = multer({fileFilter: cvFileFilter,storage: storage})
const uploadAvatar = multer({fileFilter: avatarFileFilter,storage: storage})

uploadRouter.post('/cv', uploadCv.single('cv'), UploadController.uploadCv)
uploadRouter.post('/avatar', uploadAvatar.single('avatar'), UploadController.uploadAvatar)
export default uploadRouter

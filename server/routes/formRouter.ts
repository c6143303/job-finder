import FormController from "../controller/formController";
import {cvFileFilter, storage} from "../config/multer";
import * as multer from "multer";
import ApiError from "../error/ApiError";

const FormRouter = require('express').Router()

FormRouter.post('/send', FormController.send)
FormRouter.get('/get-all', FormController.getAll)
FormRouter.post('/send-application', FormController.sendApplication)
FormRouter.get('/get-applications', FormController.getApplications)
FormRouter.get('/get-company-applications/:companyId', FormController.getCompanyApplications)
FormRouter.post('/remove-application', FormController.removeApplications)
FormRouter.get('/update-status/:id', FormController.updateStatus)

export default FormRouter
const companyRouter = require('express').Router()
import companyController from "../controller/companyController";
import {TokenService} from "../service/TokenService";
import authMiddleware from "../middleware/auth-middleware";

companyRouter.get('/get-all', companyController.getAll)
companyRouter.post('/register', companyController.register)
companyRouter.post('/login', companyController.login)
companyRouter.post('/update-by-id', companyController.updateById)
companyRouter.get('/get-by-id/:id', companyController.getById)
companyRouter.get('/get-by-id-private/:id', companyController.getById)
companyRouter.get('/verify', authMiddleware,companyController.verify)

export default companyRouter
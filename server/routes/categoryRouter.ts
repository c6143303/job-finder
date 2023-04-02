import TypeController from "../controller/typeController";

const categoryRouter = require('express').Router()
import typeController from "../controller/typeController";
import categoryController from "../controller/categoryController";

categoryRouter.post('/create', categoryController.create)
categoryRouter.delete('/delete', categoryController.delete)
categoryRouter.post('/update', categoryController.update)
categoryRouter.get('/get-all', categoryController.getAll)
categoryRouter.get('/get-by-id/:id', categoryController.getById)
export default categoryRouter

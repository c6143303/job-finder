import typeController from "../controller/typeController";

const typeRouter = require('express').Router()
import TypeController from "../controller/typeController";

typeRouter.post('/create', TypeController.create)
typeRouter.delete('/delete', typeController.delete)
typeRouter.post('/update', typeController.update)
typeRouter.get('/get-all', typeController.getAll)
typeRouter.get('/get-by-id/:id', typeController.getById)
export default typeRouter
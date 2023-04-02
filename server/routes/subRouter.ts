import SubController from "../controller/subController";

const SubRouter = require('express').Router()

// SPEAK
SubRouter.post('/create-speak', SubController.createSpeak)
SubRouter.get('/get-speaks', SubController.getSpeaks)
SubRouter.post('/update-speak', SubController.updateSpeak)
SubRouter.delete('/delete-speak', SubController.deleteSpeak)

// EMPLOYEE
SubRouter.get('/get-employees', SubController.getEmployees)
SubRouter.post('/create-employee', SubController.createEmployee)
SubRouter.post('/update-employee', SubController.updateEmployee)
SubRouter.delete('/delete-employee', SubController.deleteEmployee)

export default SubRouter
import {Express, Request, Response} from "express";
import ApiError from "../error/ApiError";
import {Company, Employee, ProductCategory, ProductType, Speak} from '../models/models'
import * as bcrypt from 'bcrypt'
import {ICompany, IEmployee, ILogin, ISpeak, IType} from "../interface";

class SubController {
    async createSpeak(req: Request<any, any, ISpeak, any>, res, next) {
        try {
            const {language} = req.body
            if (!language) return next(ApiError.badRequest('language is not defined'))

            const result = await Speak.create({language: language})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async updateSpeak(req: Request<any, any, ISpeak, any>, res, next) {
        try {
            const {language, id} = req.body
            if (!language || !id) return next(ApiError.badRequest('language or id is not defined'))

            const getSpeakItem = await Speak.findOne({where: {id: id}})
            if (!getSpeakItem) return next(ApiError.badRequest('speak is was not found'))

            const result = await getSpeakItem.update({language: language})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async deleteSpeak(req: Request<any, any, ISpeak, any>, res, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))

            const result = await Speak.destroy({where: {id: id}})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async createEmployee(req: Request<any, any, IEmployee, any>, res, next) {
        try {
            const {from, till} = req.body
            if (!from || !till) return next(ApiError.badRequest('till or from is not defined'))

            const result = await Employee.create({till, from})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async updateEmployee(req: Request<any, any, IEmployee, any>, res, next) {
        try {
            const {till, from, id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))

            const getEmployee = await Employee.findOne({where: {id: id}})
            if (!getEmployee) return next(ApiError.badRequest('employee was not found'))

            const result = await getEmployee.update({from, till})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async deleteEmployee(req: Request<any, any, IEmployee, any>, res, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))

            const result = await Employee.destroy({where: {id: id}})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getEmployees(req: Request<any, any, IEmployee, any>, res, next) {
        try {
            const result = await Employee.findAll()
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getSpeaks(req: Request<any, any, IEmployee, any>, res, next) {
        try {
            const result = await Speak.findAll()
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

export default new SubController()
import {Express, Request, Response} from "express";
import ApiError from "../error/ApiError";
import {Company, ProductCategory, ProductType} from '../models/models'
import * as bcrypt from 'bcrypt'
import {ICompany, ILogin, IType} from "../interface";

class TypeController {
    async create(req: Request<any, any, IType, any, any>, res: Response, next) {
        const {name} = req.body

        console.log(name)
        try {
            if (!name) return next(ApiError.badRequest('name is not defined'))
            const type = await ProductType.create({name: name})

            return res.status(200).json(type)
        } catch (e) {
            next(e)
        }
    }

    async delete(req: Request<any, any, IType, any, any>, res: Response, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))

            const response = await ProductType.destroy({where: {id: id}})
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async update(req: Request<any, any, IType, any, any>, res: Response, next) {
        try {
            const {id, name} = req.body
            if (!id || !name) return next(ApiError.badRequest('id is not defined or name'))
            const candidate = await ProductType.findOne({where: {id: id}})
            candidate.name = name
            await candidate.save()
            res.json(candidate)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req: Request<any, any, IType, any, any>, res: Response, next) {
        try {
            const result = await ProductType.findAll()
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async getById(req: Request<any, any, IType, any, any>, res: Response, next) {
        try {
            const {id} = req.params
            if (!id) return next(ApiError.badRequest('id is not defined'))

            const result = await ProductType.findOne({where: {id: id}})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

export default new TypeController()
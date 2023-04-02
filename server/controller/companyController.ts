import {Express, Request, Response} from "express";
import ApiError from "../error/ApiError";
import {Company} from '../models/models'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import {ICompany, ILogin} from "../interface";
import {TokenService} from "../service/TokenService";

class CompanyController {
    async register(req: Request<any, any, ICompany, any, any>, res: Response, next) {
        try {
            const {email, password} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }

            const candidate = await Company.findOne({where: {email: email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)

            const company: ICompany = await Company.create({email: email, password: hashPassword})
            const token = await jwt.sign(company.id, email)
            return res.json({token})
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await Company.findOne({where: {email: email}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        const token = TokenService.generateJwt(user.id, email)
        res.status(200).json(token)
    }

    async getAll(req: Request, res, next) {
        const companies = await Company.findAll()
        return res.json(companies)
    }

    async updateById(req: Request<any, any, any, ILogin, any>, res: Response, next) {
        const {id, password} = req.body

        try {
            if (!id) return next(ApiError.badRequest('id is not defined'))

            if (password) {
                const hashedPassword = await bcrypt.hash(password, 5)
                req.body.password = hashedPassword
            }
            const candidate = await Company.findOne({where: {id: id}})
            if (!candidate) return next(ApiError.badRequest('company not defined'))

            const updatedCandidate = await candidate.update(req.body)
            res.json(updatedCandidate)
        } catch (e) {
            next(e)
        }
    }

    async getById(req: Request<{ id: number }, any, any, any>, res: Response, next) {
        try {
            const {id} = req.params
            if (!id) return next(ApiError.badRequest('id wrong'))
            const candidate: ICompany = await Company.findOne({where: {id: id}})
            if (!candidate) next(ApiError.badRequest('wrong id'))

            return res.json(candidate)
        } catch (e) {
            next(e)
        }
    }

    async verify(req:{token: string}, res, next) {
        try {
            return res.json(req.token)
        } catch (e) {
            next(e)
        }
    }
}

export default new CompanyController()
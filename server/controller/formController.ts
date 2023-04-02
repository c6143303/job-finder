import {Request, Response} from 'express'
import {Applications, Company, SupportForm} from "../models/models";
import {IApplication, ISupportForm} from "../interface";
import ApiError from "../error/ApiError";
import {type} from "os";

class FormController {
    async send(req: Request<any, any, ISupportForm, any>, res: Response, next) {
        try {
            const {message, companyId} = req.body
            if (!message || !companyId) return next(ApiError.badRequest('message or companyId null'))
            const result = await SupportForm.create({message, companyId})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req: Request<any, any, ISupportForm, any>, res: Response, next) {
        try {
            const result = await SupportForm.findAll()
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async sendApplication(req: Request<any, any, IApplication, any>, res: Response, next) {
        try {
            const {companyId} = req.body
            if (!companyId) return next(ApiError.badRequest('companyId null or file null'))
            const company = await Company.findOne({where: {id: companyId}})
            const application = await Applications.create({companyId: company, ...req.body, cv: req.body.cv})
            return res.json(application)
        } catch (e) {
            next(e)
        }
    }

    async removeApplications(req: Request<any, any, ISupportForm, any>, res: Response, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is null'))

            const result = await Applications.destroy({where: {id: id}})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getCompanyApplications(req: Request<any, any, ISupportForm, { checked: 'false' | 'true' }>, res: Response, next) {
        try {
            const {companyId} = req.params
            const {checked} = req.query

            if (!companyId) return next(ApiError.badRequest('id is null'))
            if (checked !== 'false' && checked !== 'true') {
                const result = await Applications.findAll({where: {companyId: companyId}, order: [['createdAt', 'DESC']]})
                res.json(result)
            } else {
                const result = await Applications.findAll({where: {companyId: companyId, checked: checked}, order: [['createdAt', 'DESC']]})
                return res.json(result)
            }
        } catch (e) {
            next(e)
        }
    }

    async getApplications(req: Request<any, any, ISupportForm, any>, res: Response, next) {
        try {
            return res.json(await Applications.findAll())
        } catch (e) {
            next(e)
        }
    }

    async updateStatus(req: Request<any, any, IApplication, any>, res: Response, next) {
        try {
            const {id} = req.params
            if (!id) return next(ApiError.badRequest('id is null'))

            let application = await Applications.findOne({where: {id: id}})
            if (!application) next(ApiError.badRequest('application is not defined'))
            application.checked = !application.checked

            return res.json(await application.save())
        } catch (e) {
            next(e)
        }
    }
}

export default new FormController()
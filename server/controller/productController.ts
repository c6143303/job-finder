import {Request, Response} from 'express'
import {
    IAddProduct,
    ICompany,
    ICompanyClient,
    IEmployee, IGetProduct,
    IGetProducts,
    IUpdateProduct
} from "../interface";
import {Company, Employee, Product} from "../models/models";
import ApiError from "../error/ApiError";
import {Op} from 'sequelize'

class ProductController {
    async   getCompaniesProducts(req: Request<any, any, any, {companyId: string}>, res: Response, next) {
        const {
            companyId,
        } = req.query

        try {
            const product = await Product.findAll({where: {companyId}, order: [['createdAt', 'DESC']]})
            return res.json(product)
        } catch (e) {
            next(e)
        }
    }

    async addProduct(req: Request<any, any, IAddProduct, number>, res: Response, next) {
        const {
            title,
            position,
            description,
            salaryFrom,
            salaryTill,
            companyId,
            typeId,
            categoryId,
            expires,
            imageSrc
        } = req.body

        try {
            const product = await Product.create({...req.body})
            return res.json(product)
        } catch (e) {
            next(e)
        }
    }

    async deleteProduct(req: Request<any, any, { id: number }, number>, res: Response, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))
            const result = await Product.destroy({where: {id: id}})
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async updateProduct(req: Request<any, any, IUpdateProduct, number>, res: Response, next) {
        try {
            const {id} = req.body
            if (!id) return next(ApiError.badRequest('id is not defined'))
            let product = await Product.findOne({where: {id: id}})
            if (!product) return next(ApiError.badRequest('no product with such id'))
            const result = await product.update({...req.body})

            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getProducts(req: Request<any, any, any, IGetProducts>, res: Response, next) {
        const {page = 1, pageSize = 5, categoryId = '', typeId = '', sort = 'high'} = req.query
        let offset = (page - 1) * pageSize

        try {
            const generateCategoryQuery = categoryId.length ? {
                categoryId: {
                    [Op.or]: Array.isArray(categoryId) ? categoryId : [categoryId]
                }
            } : null
            const generateTypeQuery = typeId.length ? {
                typeId: {
                    [Op.or]: Array.isArray(typeId) ? typeId : [typeId]
                }
            } : ''
            let order = []
            if (sort === 'high') {
                order = ['salaryFrom', 'DESC']
            } else if ((sort === 'low')) {
                order = ['salaryFrom', 'ASC']
            } else if (sort === 'date') {
                order = ['createdAt', 'DESC']
            }

            const products = await Product.findAndCountAll({
                limit: pageSize,
                offset: offset,
                where: {
                    ...generateTypeQuery,
                    ...generateCategoryQuery
                },
                order: [order],
            })
            return res.json(products)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

    async getById(req: Request<any, any, any, any>, res: Response, next) {
        try {
            const {id} = req.params
            const product: IGetProduct = await Product.findOne({where: {id: id}, raw: true})
            const owner: ICompany = await Company.findOne({where: {id: product.companyId}})
            const employeesAmount: IEmployee = await Employee.findOne({where: {id: owner.employeeId}})

            const company: ICompanyClient = {
                about: owner.about,
                companyName: owner.companyName,
                contactEmail: owner.contactEmail,
                contactPerson: owner.contactPerson,
                contactPhone: owner.contactPhone,
                facebook: owner.facebook,
                linkedin: owner.linkedin,
                location: owner.location,
                twitter: owner.twitter,
                website: owner.website,
                employeeAmount: {
                    id: employeesAmount.id,
                    from: employeesAmount.from,
                    till: employeesAmount.till
                }
            }
            return res.json({
                ...product,
                company
            })
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

}

export default new ProductController()
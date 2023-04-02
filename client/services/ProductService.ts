import axios from '../http/index'
import {IGetProducts, IGetProduct, TSort, IProduct, ICompanyApplication} from "../interfaces";
import {AxiosResponse} from "axios";
import TokenServices from "./TokenServices";

export class ProductService {
    static async getProducts(pageSize: number = 5, page: number = 1, categoryId: number[] = [], typeId: number[] = [], sort: TSort = 'high'): Promise<IGetProducts> {
        try {
            const categoryQuery = categoryId.length ? categoryId.map(id => `&categoryId=${id}`).join('') : ''
            const typeQuery = typeId.length ? typeId.map((id) => `&typeId=${id}`).join('') : ''
            const sortQuery = `&sort=${sort}`
            const query = `?pageSize=${pageSize}&page=${page}${categoryQuery}${typeQuery}${sortQuery}`

            const result = await axios.get(`product/get-products${query}`)
            return result.data
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async getById(productId: number = 1) {
        try {
            const product = await axios.get<any, AxiosResponse, any>(`product/get-by-id/${productId}`)
            return product.data as IGetProduct
        } catch (e: any) {
            return false
        }
    }

    static async updateById(data: IGetProduct | IProduct): Promise<IProduct> {
        const token = localStorage.getItem('token')
        if (!token) throw 'token is not defined'
        const {companyId} = TokenServices.decodeToken(token)

        console.log(data)
        try {
            const response = await axios.post<any, AxiosResponse, any>('product/update-product', data)
            return response.data
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async deleteById(id: number) {
        try {
            return await axios.post<any, number, any>('product/delete-product', {
                id
            })
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async addProduct(data: IProduct) {
        const token = localStorage.getItem('token')
        if (!token) throw 'token is not defined'
        const {companyId} = TokenServices.decodeToken(token)

        try {
            return await axios.post<any, IGetProduct, any>('product/add-product', {
                ...data, companyId: companyId
            })
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async getProductByCompanyId() {
        const token = localStorage.getItem('token')
        if (!token) throw 'token is not defined'
        const {companyId} = TokenServices.decodeToken(token)

        try {
            const response: AxiosResponse = await axios.get(`product/get-companies-products/?companyId=${companyId}`)
            return response.data as IGetProduct[]
        } catch (e: any) {
            throw e.response.data.message
        }
    }
}
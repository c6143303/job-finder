import axios from '../http/index'
import {AxiosResponse} from "axios";
import TokenServices from "./TokenServices";
import {ICompany} from "../interfaces";

class CompanyService {
    static async getCompanyById() {
        const token = localStorage.getItem('token')
        if (!token) throw 'token is not defined'
        const {companyId} = TokenServices.decodeToken(token)

        try {
            const res: AxiosResponse = await axios.get(`/company/get-by-id/${companyId}`)
            return res.data as ICompany
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async updateCompanyById(data: ICompany):Promise<ICompany> {
        try {
            const token = localStorage.getItem('token')
            if (!token) throw 'token is not defined'
            const {companyId} = TokenServices.decodeToken(token)

            const res: AxiosResponse<ICompany>= await axios.post('company/update-by-id', {...data, id: companyId})
            return res.data
        } catch (e: any) {
            throw e.response.data.message
        }
    }
}

export default CompanyService
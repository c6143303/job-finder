import axios from '../http/index'
import {IApplicationForm, IGetProducts, IGetProduct, TSort, ICompanyApplication} from "../interfaces";
import {AxiosResponse} from "axios";
import TokenServices from "./TokenServices";

export class FormServices {
    static async sendApplicationForm(data: IApplicationForm): Promise<IApplicationForm | undefined> {
        try {
            const response = await axios.post<any, AxiosResponse, any>('form/send-application', data)
            return response.data
        } catch (e: any) {
            console.log(e.response.data.message)
        }
    }

    static async getCompanyApplications(get?: string | undefined): Promise<ICompanyApplication[]> {
        let query;
        switch (get) {
            case "checked":
                query = '?checked=true'
                break
            case "not-checked":
                query = '?checked=false'
                break
            default :
                query = ''
        }
        const token = localStorage.getItem('token')
        if (!token) throw 'token is not defined'
        const {companyId} = TokenServices.decodeToken(token)

        try {
            const response: AxiosResponse = await axios.get(`/form/get-company-applications/${companyId}${query}`)
            return response.data
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async updateApplicationStatus(applicationId: number):Promise<ICompanyApplication[]>  {
        try {
            const response: AxiosResponse = await axios.get(`form/update-status/${applicationId}`)
            return response.data
        } catch (e: any) {
            throw e.response.data.message
        }
    }
}
import axios from "../http";
import {AxiosResponse} from "axios";
import {ISubItem, IEmployees, ILanguages} from "../interfaces";

class SubServices {
    static async getAllLanguages() {
        try {
            const response = await axios.get<any, AxiosResponse, any>('sub/get-speaks')
            return response.data as ILanguages[]
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async getEmployees() {
        try {
            const response = await axios.get<any, AxiosResponse, any>('sub/get-employees')
            return response.data as IEmployees[]
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async getTypes() {
        try {
            const response = await axios.get<any, AxiosResponse, any>('type/get-all')
            return response.data as ISubItem[]
        } catch (e: any) {
            throw e.response.data.message
        }
    }

    static async getCategories() {
        try {
            const response = await axios.get<any, AxiosResponse, any>('category/get-all')
            return response.data as ISubItem[]
        } catch (e: any) {
            throw e.response.data.message
        }
    }
}

export default SubServices
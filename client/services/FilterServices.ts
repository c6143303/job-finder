import axios from '../http/index'
import {AxiosResponse} from "axios";
import {ICategories} from "../interfaces";

export class FilterServices {
    static async fetchCategories() {
        try {
            const categories:AxiosResponse<ICategories[]> = await axios.get('/category/get-all')
            return categories.data
        } catch (e) {
            console.log(e)
        }
    }

    static async fetchTypes() {
        try {
            const types:AxiosResponse<ICategories[]> = await axios.get('/type/get-all')
            return types.data
        } catch (e) {
            console.log(e)
        }
    }
}
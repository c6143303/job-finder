import {AxiosError, AxiosResponse} from "axios";
import axios from '../http/index'

class UploadService {
    async signIn(data: { email: string, password: string }) {
        try {
        } catch (error: any) {
            console.log(error.response.data.message)
        }
    }
}

export default new UploadService()
import { AxiosError, AxiosResponse } from "axios";
import axios from "../http/index";

class AuthService {
  constructor() {}

  async signOut() {
    localStorage.removeItem("token");
    window.location.href = window.location.pathname;
  }

  async verify() {
    try {
      const response = await axios.get("company/verify");
      return response;
    } catch (e: any) {
      throw e?.response?.data?.message;
    }
  }

  async signIn(data: { email: string; password: string }) {
    try {
      const response: AxiosResponse = await axios.post("/company/login", data);
      localStorage.setItem("token", response.data);
      window.location.href = window.location.pathname;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
}

export default new AuthService();

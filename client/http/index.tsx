import axios from 'axios'

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})

http.interceptors.request.use(config => {
    const token = typeof window !== "undefined" ? localStorage.getItem('token') : null

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

export default http
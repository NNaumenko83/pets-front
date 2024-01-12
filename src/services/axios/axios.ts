import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

// Utility to add JWT
export const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Utility to remove JWT
export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

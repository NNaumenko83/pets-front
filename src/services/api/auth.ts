/* eslint-disable class-methods-use-this */
import axios from 'axios'

class AuthApi {
    async updateAvatar(formData) {
        const res = await axios.patch('/auth/avatars', formData)
        return res.data
    }
}

export default new AuthApi()

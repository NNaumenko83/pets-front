import type userType from './userType'

type UserUpdateType = userType & {
    phone: string | null
    city: string | null
    birthday: string | null
}

export default UserUpdateType

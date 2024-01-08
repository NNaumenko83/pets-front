/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit'
import type TAuth from 'src/types/authType'
import axios from 'axios'
import type { Auth } from './slice'

axios.defaults.baseURL = 'http://localhost:5000/api'

// Utility to add JWT
const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

const userRegister = async () => {
    return new Promise(res => {
        setTimeout(() => {
            res({
                user: { name: 'Mykola', email: 'nnv2006@ukr.net' },
                token: '12233',
            })
        }, 3000)
    })
}

// const userLogin = async () => {
//     return new Promise(res => {
//         setTimeout(() => {
//             res({
//                 user: { name: 'Mykola', email: 'nnv2006@ukr.net' },
//                 token: '12233',
//             })
//         }, 3000)
//     })
// }

export const register = createAsyncThunk<
    Pick<Auth, 'user' | 'token'>,
    TAuth,
    { rejectValue: string }
>('auth/register', async (credentials, { rejectValue }) => {
    console.log('credentials:', credentials)
    const user = await userRegister()
    return user as Pick<Auth, 'user' | 'token'>
})

export const login = createAsyncThunk('auth/login', async function name() {})

export const refreshUser = createAsyncThunk<
    Pick<Auth, 'user' | 'token'>,
    undefined,
    { rejectValue: string }
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
    // ========= TEST =========
    console.log('Refreshing user')
    const user = await userRegister()
    return user as Pick<Auth, 'user' | 'token'>
    // ========================
    // Reading the token from the state via getState()
    // const state = thunkAPI.getState()
    // const persistedToken = state.auth.token
    // if (persistedToken === null) {
    //     // If there is no token, exit without performing any request
    //     return thunkAPI.rejectWithValue('Unable to fetch user')
    // }
    // try {
    //     // If there is a token, add it to the HTTP header and perform the request
    //     setAuthHeader(persistedToken)
    //     const res = await axios.get('/users/me')
    //     return res.data
    // } catch (error) {
    //     return thunkAPI.rejectWithValue(error.message)
    // }
})

/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit'
import type TAuth from 'src/types/authType'
import type { Auth } from './slice'

const userAuth = async () => {
    return new Promise(res => {
        setTimeout(() => {
            res({
                user: { name: 'Mykola', email: 'nnv2006@ukr.net' },
                token: '12233',
            })
        }, 3000)
    })
}

export const register = createAsyncThunk<
    Pick<Auth, 'user' | 'token'>,
    TAuth,
    { rejectValue: string }
>('auth/register ', async (credentials, { rejectValue }) => {
    console.log('credentials:', credentials)
    const user = await userAuth()
    return user as Pick<Auth, 'user' | 'token'>
})

export const login = createAsyncThunk('auth/login', async function name() {})

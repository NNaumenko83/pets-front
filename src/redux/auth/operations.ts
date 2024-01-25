/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit'
import type TAuth from 'src/types/authType'
import { setAuthHeader, clearAuthHeader } from 'src/services/axios/axios'
import axios from 'axios'
import type UserUpdateType from 'src/types/userUpdatetype'
import type { Auth } from './slice'
import authApi from '../../services/api/auth'

export const register = createAsyncThunk<
    Pick<Auth, 'user' | 'token'>,
    TAuth,
    { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
    try {
        const res = await axios.post('/auth/register', credentials)
        setAuthHeader(res.data.accessToken)
        const { user, accessToken: token } = res.data
        return { user, token }
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

export const login = createAsyncThunk<
    Pick<Auth, 'user' | 'token'>,
    TAuth,
    { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const res = await axios.post('/auth/login', credentials)
        setAuthHeader(res.data.accessToken)
        const { user, accessToken: token } = res.data
        return { user, token }
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

export const refreshUser = createAsyncThunk<
    Pick<Auth, 'user'>,
    undefined,
    { rejectValue: string; state: { auth: Auth } }
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const persistedToken: string | null = state.auth.token

    if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return rejectWithValue('Unable to fetch user')
    }
    try {
        // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken)
        const res = await axios.get('/auth/current')

        return { user: res.data }
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

export const logout = createAsyncThunk<
    void,
    undefined,
    { rejectValue: string }
>('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.post('/auth/logout')
        clearAuthHeader()
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

// Update avatar
export const updateAvatar = createAsyncThunk<
    string,
    FormData,
    { rejectValue: string }
>('auth/avatar', async (formData, { rejectWithValue }) => {
    try {
        const avatar = await authApi.updateAvatar(formData)

        return avatar
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

// Update user info
export const updateUserInfo = createAsyncThunk<
    Pick<Auth, 'user'>,
    UserUpdateType,
    { rejectValue: string }
>('auth/update', async (formData, { rejectWithValue }) => {
    try {
        const avatar = await authApi.updateAvatar(formData)

        return avatar
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue('Something went wrong')
    }
})

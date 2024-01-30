/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'

import {
    register,
    login,
    refreshUser,
    logout,
    updateAvatar,
} from './operations'

// import { register, logIn, logOut, refreshUser } from './operations'

export type Auth = {
    user: {
        name: string | null
        email: string | null
        avatarURL: string | null
        phone: string | null
        city: string | null
        birthday: string | null
    }
    token: string | null
    isLoggedIn: boolean
    isRefreshing: boolean
    showModalCongrats: boolean
    error: null | string
    isLoading: boolean
}

const initialState: Auth = {
    user: {
        name: null,
        email: null,
        avatarURL: null,
        phone: null,
        city: null,
        birthday: null,
    },
    token: null,
    // isLoggedIn: false,
    isLoggedIn: true,
    isRefreshing: false,
    showModalCongrats: true,
    error: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled, state => {
                state.user = { name: null, email: null, avatar: null }
                state.token = null
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.showModalCongrats = false
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            .addCase(updateAvatar.pending, state => {
                state.isLoading = true
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.isLoading = false
                state.user.avatarURL = action.payload
            })
            // Щоб не писати rejected для кожного випадку використовуємо
            // addMatcher
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
                state.isRefreshing = false
            })
    },
})

const authReducer = authSlice.reducer

export default authReducer

// Перевіряємо чи тип action закінчується на rejected

function isError(action: Action) {
    return action.type.endsWith('rejected')
}

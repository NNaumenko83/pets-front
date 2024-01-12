/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'

import { register, login, refreshUser, logout } from './operations'

// import { register, logIn, logOut, refreshUser } from './operations'

export type Auth = {
    user: { name: string | null; email: string | null }
    token: string | null
    isLoggedIn: boolean
    isRefreshing: boolean
    showModalCongrats: boolean
    error: null | string
    loading: boolean
}

const initialState: Auth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    showModalCongrats: true,
    error: null,
    loading: false,
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
                state.user = { name: null, email: null }
                state.token = null
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.showModalCongrats = false
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            // Щоб не писати rejected для кожного випадку використовуємо
            // addMatcher
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
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

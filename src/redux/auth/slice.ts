/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice /* 8PayloadAction */ } from '@reduxjs/toolkit'
import { register, refreshUser } from './operations'

// import { register, logIn, logOut, refreshUser } from './operations'

export type Auth = {
    user: { name: string | null; email: string | null }
    token: string | null
    isLoggedIn: boolean
    isRefreshing: boolean
    showModalCongrats: boolean
}

const initialState: Auth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    showModalCongrats: true,
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
            .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.showModalCongrats = false
                state.isLoggedIn = true
                state.isRefreshing = false
            })
    },
})

const authReducer = authSlice.reducer

export default authReducer

'use client'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/searchSlice'
import searchSlice from './slice/searchSlice'

export const store = configureStore({
    reducer: {
        "search" : searchSlice,
    },
})
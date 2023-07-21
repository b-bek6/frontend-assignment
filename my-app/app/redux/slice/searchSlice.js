'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null, // {name}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        "setReduxSearch": (state, action) => {
            console.log(action)
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setReduxSearch, logout, stopLoading } = searchSlice.actions

export default searchSlice.reducer 
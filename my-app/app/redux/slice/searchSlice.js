'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        "setReduxSearch": (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setReduxSearch } = searchSlice.actions
export default searchSlice.reducer 
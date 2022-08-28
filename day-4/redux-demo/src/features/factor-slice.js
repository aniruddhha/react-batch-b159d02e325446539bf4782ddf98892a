import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startFrom : -5
}

const factorSlice = createSlice({
    name : 'factor',
    initialState,
    reducers : {
        setStartAt : (state, action) => {
            console.log(action)
            state.startFrom = action.payload.stAt // immerjs is doing in immutable way
        }
    }
})

export const selectStartAt = state => state.factor.startFrom

export const { setStartAt } = factorSlice.actions

export default factorSlice.reducer
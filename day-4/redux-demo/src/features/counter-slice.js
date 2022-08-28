import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count : 0
}

export const couterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        plus : (state, action ) => {
            // console.log(state)
            console.log(action)

            state.count = action.payload.startFrom + 1
        },
        minus : (state, action) => {
            // console.log(state)
            console.log(action)

            state.count = action.payload.startFrom - 1
        },
        initial : (state, action) => {
            state.count = action.payload.startFrom
        }
    }
})

export const selectCount = state => state.counter.count
export const selectStartFrom = state => state.factor.startFrom

export const { initial, plus, minus } = couterSlice.actions
console.log(couterSlice.actions)
// console.log(plus)
// console.log(minus)

export default couterSlice.reducer
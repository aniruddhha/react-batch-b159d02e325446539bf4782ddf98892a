import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.count += 1 
        },
        decrement : (state) => {
            state.count -= 1
        },
        incrementBy : (state, action) => {
            console.log(action)
            state.count += Number(action.payload)
        }
    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions
export const selectorCount = state => state.counter.count

export const asyncAction = amt => dispatch => setTimeout( () => dispatch(incrementBy(amt)), 1300 )

export default counterSlice.reducer
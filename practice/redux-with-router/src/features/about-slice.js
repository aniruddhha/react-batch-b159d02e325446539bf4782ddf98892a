import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: 0
}

const aboutSlice = createSlice({
    name : 'about',
    initialState,
    reducers : {
        addData : (state, action) => {
            state.data = action.payload
            // console.log(state)
            // console.log(action)
        }
    }
})

export const { addData } = aboutSlice.actions

export const selectAboutData = state => state.about.data
export const selectContactData = state => state.contact.data

export default aboutSlice.reducer

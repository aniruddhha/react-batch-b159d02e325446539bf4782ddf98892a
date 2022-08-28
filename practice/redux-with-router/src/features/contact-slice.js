import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: 0
}

export const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers : {
        addData : (state, action) => {
            state.data = action.payload
        }
    }
})

export const { addData } = contactSlice.actions

export const selectContactData = state => state.contact.data
export const selectAboutData = state => state.about.data

export default contactSlice.reducer
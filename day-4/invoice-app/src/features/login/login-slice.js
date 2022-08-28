
import { createSlice } from "@reduxjs/toolkit";
import { loginCall } from "./login-thunk";

const initialState = {
    token : undefined
}

export const loginSlice = createSlice({
    name : 'login',
    initialState, 
    reducers : {  },
    extraReducers(builder) {
        builder.addCase(loginCall.fulfilled, (state, action) => {
            console.log(action)
            return { token : action.payload.token}
        }).addCase(loginCall.rejected, (state, action) => {
            console.log('rejected')
            console.log(action)
            state.error = true
        })
    }
})

export const selectError = state => state.login.error ? state.login.error : false 

export default loginSlice.reducer
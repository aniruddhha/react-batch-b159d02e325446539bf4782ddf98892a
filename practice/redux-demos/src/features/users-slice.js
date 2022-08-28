import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data
})

export const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {},
    extraReducers (builder) {
        builder.addCase( fetchUsers.fulfilled, (state, action) => {
            console.log(action)
            return action.payload.data
        } )
    }
})

export const selectUsers = state => state.users

export default userSlice.reducer
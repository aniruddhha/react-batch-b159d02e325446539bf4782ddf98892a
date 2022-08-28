
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginCall = createAsyncThunk('users/fetchUsers', async ({ email, password }) => {
    const response = await axios.post('https://reqres.in/api/login', {
        email, password
    });
    return response.data
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoices = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://reqres.in/api/unknown');
    return response.data
})
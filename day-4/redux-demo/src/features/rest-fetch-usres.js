import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://reqres.in/api/users')
    return response.data
})

export const readFromLocal = createAsyncThunk('users/loadLocal', async () =>{

    const us = localStorage.getItem('')

    return us
})
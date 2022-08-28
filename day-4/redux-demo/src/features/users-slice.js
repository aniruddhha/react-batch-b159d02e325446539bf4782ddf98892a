import { createSlice } from '@reduxjs/toolkit' 
import { fetchUsers } from './rest-fetch-usres'

const initialState = []

const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {  },
    extraReducers(builder) {
        builder.addCase( fetchUsers.fulfilled, (state, action) => {
            console.log('👉👉👉👉')
            console.log(action)
            
            return action.payload.data
        })
    }
})

export const selectUsers = state => state.users
export const selectUsersError = state => state.users.error


export default usersSlice.reducer
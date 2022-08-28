import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter-slice'
import factorReducer from '../features/factor-slice'
import userReducer from '../features/users-slice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        factor : factorReducer,
        users : userReducer
    }
})
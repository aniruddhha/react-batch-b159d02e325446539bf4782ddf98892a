import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/login-slice'
import invoiceReducer from '../features/invoice/invoice-slice'

export const store = configureStore({
    reducer : {
        login : loginReducer,
        invoice : invoiceReducer
    }
 })
import { createSlice } from "@reduxjs/toolkit";
import { fetchInvoices } from "./invoice-thunk";

const initialState =[]

export const invoiceSlice = createSlice({
    name : 'invoice',
    initialState, 
    reducers : {  },
    extraReducers(builder) {
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            console.log(action)
            return action.payload.data
        }).addCase(fetchInvoices.rejected, (state, action) => {
            console.log('rejected')
            console.log(action)
            state.error = true
        })
    }
})

export const selectError = state => state.invoice.error ? state.invoice.error : false 

export const selectInvoices = state => state.invoice

export default invoiceSlice.reducer
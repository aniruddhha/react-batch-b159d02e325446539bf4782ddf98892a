import { configureStore } from "@reduxjs/toolkit";
import aboutReduer from '../features/about-slice'
import contactReducer from '../features/contact-slice'

export const store = configureStore({
    reducer : {
      about : aboutReduer,
      contact : contactReducer
    }
 })
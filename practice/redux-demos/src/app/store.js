//https://redux.js.org/tutorials/essentials/part-1-overview-concepts
//https://react-redux.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter-slice'
import userReducer from "../features/users-slice";

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        users : userReducer
    }
 })
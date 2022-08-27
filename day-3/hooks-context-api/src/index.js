import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app';


const initialState = {
  ver  : 'abc'
}

export const CompContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CompContext.Provider value={initialState}>
      <App />
    </CompContext.Provider>  
);

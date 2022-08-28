import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from './app/store'
import { Provider } from 'react-redux';

import { Dashboard } from './features/dashboard/dashboard';
import { Invoice } from './features/invoice/invoice';
import { Login } from './features/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

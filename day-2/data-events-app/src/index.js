import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiCaller } from './http/api-calls';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = <ApiCaller/>

root.render(content);


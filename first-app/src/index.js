import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Mobile } from './props/mobile';

const root = ReactDOM.createRoot(document.getElementById('root'));

const cc = 'IN'
const number = '123456'

const dt = { 
    cc : 'IN',
    number : '123456789'
}

const mob = (
    <Mobile {...dt} >
        <div>
            <h1> hello </h1>
        </div>
    </Mobile>
)

root.render(mob);

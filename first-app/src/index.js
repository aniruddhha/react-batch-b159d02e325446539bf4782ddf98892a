import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cities } from './adv/loops';
import './index.css'
import { BaseCounter } from './st/base-counter';
import { Counter } from './st/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Cities/>);

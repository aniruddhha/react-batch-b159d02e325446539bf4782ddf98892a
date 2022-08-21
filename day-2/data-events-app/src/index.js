import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPanel } from './data-flow/mn-pnl';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = <MainPanel/>

root.render(content);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>
    Hi
    <div>
        <img src={ require('./sitelogo.svg') }></img>
    </div>
</h1>)
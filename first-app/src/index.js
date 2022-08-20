import React from 'react';
import ReactDOM from 'react-dom/client';
import { Car } from './basics/car';
import { Bike } from './basics/bike';

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = (
  <div>
    <h1> Welcome to react </h1>  
    <Car/>
    <Bike/>
  </div>
)

root.render(content);

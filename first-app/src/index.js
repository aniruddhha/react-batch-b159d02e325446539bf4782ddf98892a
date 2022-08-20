import React from 'react';
import ReactDOM from 'react-dom/client';

const abc = 10
const root = ReactDOM.createRoot(document.getElementById('root'));

const header = <div> Head {abc} </div>
const content = <div>  <h1> Hello to React </h1> </div>
const footer = <div> Footer </div>

const dv = React.createElement('div', null, 'Hi')

root.render(<div>
  {header}
  {content}
  {footer}
  {dv}
</div>);

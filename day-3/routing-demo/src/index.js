import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './app';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import { AppContext } from './ctx/app-context';

const appData = {}

const root = ReactDOM.createRoot(document.getElementById('root'));

const Products = React.lazy(() => import('./features/products'))
const Services = React.lazy(() => import('./features/services'))
const Contact = React.lazy(() => import('./features/contact'))
const Guard = React.lazy(() => import('./features/service-guard'))
const App = React.lazy( () => import('./app') )

root.render(
  <AppContext.Provider value={appData}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<>mmmm</>}> <App /> </Suspense>}>
          {/* <Route path='/products/:cat' element={<AppContext.Provider value={appData}> <Products /> </AppContext.Provider>} /> */}
          {/* <Route path='/services' element={<AppContext.Provider value={appData}><Services /> </AppContext.Provider>} /> */}
          {/* <Route path='/contact' element={<AppContext.Provider value={appData}><Contact /></AppContext.Provider>} /> */}

          <Route path='/products/:cat' element={ <Suspense fallback={<>Loading</>}>  <Products />   </Suspense>} />
          <Route path='/services' element={<Suspense fallback={<>Loading</>}> <Guard> <Services/> </Guard> </Suspense>}  />
          <Route path='/contact' element={<Suspense fallback={<>Loading</>}>  <Contact /></Suspense>} />

        </Route>
        <Route path='*' element={<> <h1> Not Found </h1> </>} />
      </Routes>
    </BrowserRouter>
  </AppContext.Provider>
);

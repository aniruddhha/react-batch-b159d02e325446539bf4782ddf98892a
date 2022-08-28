import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './features/about';
import { Contact } from './features/contact';
import { Services } from './features/services';
export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='services' element={<Services />} />
            </Routes>
        </BrowserRouter>
    )
}
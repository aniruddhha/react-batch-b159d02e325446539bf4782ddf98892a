import styles from './app.module.css'
import { Link, Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <nav>
                <Link to={'/'}> Home  </Link>
                <Link to='/services'> Services  </Link>
                <Link to='/products/cloths'> Products  </Link>
                <Link to='/contact'> Contact  </Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default App
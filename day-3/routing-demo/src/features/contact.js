import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../ctx/app-context"

const Contact = () => {

    const ctx = useContext(AppContext)

    // const navigate = useNavigate()

    const onPage = () => ctx.from = 'contact'

    return (
        <>
            <div>
                <h1> Contact Page {ctx.from}</h1>
            </div>
            <div>
                <input type='button' value='Home'  onClick={onPage}/>
            </div>
        </>
    )
}

export default Contact
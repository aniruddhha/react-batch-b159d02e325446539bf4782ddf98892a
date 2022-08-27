import { useContext } from "react"
import { AppContext } from "../ctx/app-context"

const Services = () => {

    const ctx = useContext(AppContext)

    const onPage = () => ctx.from = 'service'

    return (
        <>
            <div>
                <h1> Services Page {ctx.from}</h1>
            </div>
            <div>
                <input type='button' value='Home' onClick={onPage} />
            </div>
        </>
    )
}

export default Services
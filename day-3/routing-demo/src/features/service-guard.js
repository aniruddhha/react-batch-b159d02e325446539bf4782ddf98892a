import { useContext } from "react"
import { AppContext } from "../ctx/app-context"

const Guard = ({ children }) => {

    const { isService } = useContext(AppContext)

    return (
        <>
           { isService ? children : <h1> UnAuthorized </h1> }
        </>
    )
}

export default Guard
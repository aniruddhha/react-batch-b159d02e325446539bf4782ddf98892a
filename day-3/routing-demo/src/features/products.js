import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../ctx/app-context"

const Products = () => {

    const { cat } = useParams()
    const ctx = useContext(AppContext)

    const onPage = () => ctx.from = 'products'
    const onUnlock = () => ctx.isService = true

    return (
        <>
            <div>
                <h1> Products Page for category {cat} , { ctx.from} </h1>
            </div>
            <div>
                <input type='button' value='Home' onClick={onPage} />
            </div>
            <div>
                <input type='button' value='Unlock Service' onClick={onUnlock} />
            </div>
        </>
    )
}

export default Products
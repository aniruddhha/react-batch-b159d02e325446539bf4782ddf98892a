import { useContext } from "react"
import { ColorContext, CompContext } from '../context/comp-context'

export const Comp2 = () => {
    
    const { obj } = useContext(CompContext)
    const { bat, setBat } = useContext(ColorContext)

    return (
        <>
            <h1> Comp2 Version is {obj.ver} </h1>
            <h1> Comp2 Version is {bat} </h1>
        </>
    )
}
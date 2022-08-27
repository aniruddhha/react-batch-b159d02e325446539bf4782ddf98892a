import { useContext } from "react"
import { CompContext } from '../index'

export const Comp1 = () => {
    
    const dt = useContext(CompContext)
    
    return (
        <>
            <h1> Version is {dt.ver} </h1>
        </>
    )
}
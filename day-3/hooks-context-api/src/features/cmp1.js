import { useContext, useEffect } from "react"

import { CompContext, ColorContext } from '../context/comp-context'

export const Comp1 = () => {
    
    const { obj, setObj } = useContext(CompContext)
    const { bat, setBat } = useContext(ColorContext)

    useEffect( () => {
        setTimeout( () => {
            setObj({ ...obj, ver : 'abc' }) 
            console.log('Time Triggred')
        }, 1500 )
        
    }, [] )

    return (
        <>
            <h1> Comp1 Version is {obj.ver} </h1>
        </>
    )
}
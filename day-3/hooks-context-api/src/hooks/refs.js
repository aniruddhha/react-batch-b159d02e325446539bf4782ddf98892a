import { useRef, useEffect } from 'react'

export const IpDtl = () => {

    const elRef = useRef()

    useEffect(() => {
        console.log(elRef.current.value)
    }, []) 

    return (
        <>
            <input type='text' value='Okay' ref={elRef}/>
        </>
    )
}
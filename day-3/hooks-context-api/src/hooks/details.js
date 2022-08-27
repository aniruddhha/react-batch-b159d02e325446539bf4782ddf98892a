import { useCallback, useEffect, useState } from "react"

export const Details = () => {

    const [cnt, setCnt] = useState(0)

    const fetchUserData = useCallback(() => {
        fetch('https://reqres.in/api/users/1')
        .then(res => res.json())
        .then(us => console.log(us))
    },[])

    useEffect(() => {
        console.log(`cnt ${cnt}`)
    }, [fetchUserData])

     const onClk = () => {
        setInterval(() => setCnt( cnt => cnt +1), 1000)
     }

    return(
        <>
            <div> { cnt}</div>
            <input type='button' value='Okay' onClick={onClk}/>
        </>
    )
}
import styles from './counter.module.css'
import { useState } from 'react'

export function Counter() {
    const [cn, setCn] = useState(130)

    // const cn = st[0] // returns value
    // const setCn = st[1] // returns reference to function

    // bad practice to write interval in this way.
    // this side effect
    setInterval( () => { 
        // console.log(cnt++)
        setCn(cn + 1)
       
    }, 1500  )

    return (
        <div >
            <h1> { cn } </h1>
        </div>
    )
}
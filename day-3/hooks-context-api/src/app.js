import { useContext, useEffect, useState } from "react"
import { CompContext, ColorContext } from './context/comp-context'
import { Comp1 } from "./features/cmp1"
import { Comp2 } from "./features/cmp2"
import { Details } from "./hooks/details"

export const App = () => {

    const [obj, setObj] = useState({ os: '', ver: 'ttt' })
    const [bat, setBat] = useState(0)
 
    return (
        <>
            <CompContext.Provider value={{ obj, setObj }}>
                <ColorContext.Provider value={{ bat, setBat }}>
                    <div>
                        <Comp1></Comp1>
                    </div>
                    <div>
                        <Comp2></Comp2>
                    </div>
                    <div>
                        <Details/>
                    </div>
                </ColorContext.Provider>
            </CompContext.Provider>
        </>
    )
}
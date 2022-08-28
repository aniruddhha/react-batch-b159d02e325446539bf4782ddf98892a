import styles from './counter.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectCount,selectStartFrom } from './counter-slice'
import { useEffect } from 'react'
import { plus, minus , initial} from './counter-slice'

export const Counter = () => {
    
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    const startFrom = useSelector(selectStartFrom)

    const onNeg = () => dispatch(minus({ startFrom }))
    const onPos = () => dispatch(plus({ startFrom }))

    useEffect( () => {
        console.log(count)
        dispatch(initial({startFrom}))
    }, [])

    return (
        <div className={styles.outer}>
            <p>{count}</p>
            <div>
                <input type='button' value='➖' onClick={onNeg}/>
                <input type='button' value='➕' onClick={onPos}/>
            </div>
        </div>
    )
}
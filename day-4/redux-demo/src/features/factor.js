import styles from './factor.module.css'

import { useSelector, useDispatch } from 'react-redux'

import { selectStartAt } from './factor-slice'
import { setStartAt } from './factor-slice'

import { useState } from 'react'

export function Factor() {

    const startAt = useSelector(selectStartAt)
    const dispatch = useDispatch()

    const [stAt, setStAt] = useState(startAt)

    const onStCh = e => setStAt(Number(e.target.value))

    const onClkSet = () => dispatch(setStartAt({ stAt }))

    return (
        <div className={styles.cont}>
            <input type='text' placeholder="Start" value={stAt} onChange={onStCh}/>
            <input type='button' value='✅ Set' onClick={onClkSet}/>
        </div>
    )
}
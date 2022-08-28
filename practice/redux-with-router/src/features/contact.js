import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { selectContactData, selectAboutData } from './contact-slice'
import { addData } from './contact-slice'

export const Contact = () => {

    const dispatch = useDispatch()

    const abt = useSelector(selectAboutData);

    const [val, setVal] = useState('')

    const onDtCh = e => { 
        setVal(e.target.value) 
        dispatch(addData(val))
    }

    return (
        <>
            <h1>
                Contact Page : {val}
            </h1>
            <h1> About Data : {abt} </h1>
            <div>
                <input type='text' value={val} onChange={onDtCh} />
            </div>

            <div>
                <Link to='/about'> About </Link>               
            </div>
        </>
    )
}
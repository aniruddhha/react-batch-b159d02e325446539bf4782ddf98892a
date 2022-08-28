import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectAboutData, selectContactData } from './about-slice'
import { addData } from './about-slice';

import { Link } from 'react-router-dom'

export const About = () => {

    const dispatch = useDispatch()

    const cnt = useSelector(selectContactData);

    const [val, setVal] = useState('')

    const onDtCh = e => { 
        setVal(e.target.value) 
        dispatch((addData(e.target.value)))
    }

    return (
        <>
            <h1>
                About Page : { val}
            </h1>
            <h1>
                Contact Data : {cnt}
            </h1>
            <div>
                <input type='text' value={val} onChange={onDtCh}/>
            </div>
            <div>
                <Link to='/contact'> Contact </Link>               
            </div>
        </>
    )
}
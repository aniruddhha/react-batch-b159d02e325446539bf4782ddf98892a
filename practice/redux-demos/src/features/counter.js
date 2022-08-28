import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    selectorCount,
    incrementBy,
    asyncAction
} from './counter-slice';

export function Counter() {

    const [val, setVal] = useState(0)

    const onIpCh = e => setVal(e.target.value)

    const count = useSelector(selectorCount);
    
    const dispatch = useDispatch();

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type='text' value={val} onChange={onIpCh}/>
                <button onClick={() => dispatch(incrementBy(val))}>Increment By</button>
                <button onClick={() => dispatch(asyncAction(val))}>Async Action</button>
            </div>
        </div>
    )
}
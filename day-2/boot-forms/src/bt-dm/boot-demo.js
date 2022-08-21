import { useState } from 'react'

export function BootDemo() {

    const [show, setShow] = useState(false)

    const onClkSh = () => setShow(true)
    const onClkCls = () => setShow(false)

    const cls = `alert alert-success alert-dismissible fade ${ show ? 'show' : ''}`
    return (
        <>
            <div className={cls} role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClkCls}></button>
            </div>
            <div>
                <input type='button' className='btn btn-primary' value='Okay' onClick={onClkSh}/>
            </div>
        </>
    )

}
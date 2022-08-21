import { useState, useEffect } from 'react'

export function Login() {
    const [user, setUser] = useState({ lnm: '', fnm: '', cty: '', mob: '' })
    const [err, setErr] = useState({ })

    const onCtrlCh = e => {

        console.log('Called')

        const { name, value } = e.target

        if (name == 'fnm') {
            if (value.length <= 3) {
                setErr({ ...err, fnm: 'Length Should Greater than 3' })
            }
            else { setErr({ ...err, fnm: undefined }) }
        }
        if (name == 'lnm') {
            if (value.length <= 3) { setErr({ ...err, lnm: 'Length Should Greater than 3' }) }
            else { setErr({ ...err, lnm: undefined }) }
        }
        if (name == 'cty') {
            if (value.length <= 3) { setErr({ ...err, cty: 'Length Should Greater than 3' }) }
            else { setErr({ ...err, cty: undefined }) }
        }
        if (name == 'mob') {
            if (value.length <= 3) { setErr({ ...err, mob: 'Length Should Greater than 3' }) }
            else { setErr({ ...err, mob: undefined }) }
        }

        setUser({ ...user, [e.target.name]: e.target.value })
    
    }

    useEffect(() => {
        console.log(`Called`)
        console.log(user)
    }, [])

    const onLogin = ev => {
        console.log(ev)
        console.log(`Form Submitted`)
        ev.preventDefault()
        console.log(ev)

        console.log(`1. First Name ${ev.target[0].value}`)

        console.log(`2. First Name ${ev.target.fnm.value}`)

        console.log(`3. First Name ${ev.target.elements.fnm.value}`)

        if(Object.values(err).some(el => el == undefined))
            console.log('Form Invalid')
        else console.log('Form Valid')
            
    }

    return (
        <form className='container' onSubmit={onLogin}>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="text" name="fnm" className={`form-control ${ err.fnm ? 'border-danger' : ''}`} placeholder="First name" value={user.fnm} onChange={onCtrlCh} />
                    <label>{err.fnm && err.fnm}</label>
                </div>
                <div className="col">
                    <input type="text" name="lnm" className="form-control" placeholder="Last name" value={user.lnm} onChange={onCtrlCh} />
                    <label>{err.lnm && err.lnm}</label>
                </div>
            </div>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="text" name="cty" className="form-control" placeholder="City" value={user.cty} onChange={onCtrlCh} />
                    <label>{err.cty && err.cty}</label>
                </div>
                <div className="col">
                    <input type="text" name="mob" className="form-control" placeholder="Mobile" value={user.mob} onChange={onCtrlCh} />
                    <label>{err.mob && err.mob}</label>
                </div>
            </div>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="submit" className="btn btn-success" />
                </div>
            </div>
        </form>
    )
}
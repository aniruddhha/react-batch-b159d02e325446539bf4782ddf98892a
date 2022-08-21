import { useState, useEffect } from 'react'

export function Login() {

    const [fnm, setFnm] = useState('')
    const [lnm, setLnm] = useState('')
    const [cty, setCty] = useState('')
    const [mob, setMob] = useState('')

    const onFnmChanged = e => setFnm(e.target.value)
    const onLnmChanged = e => setLnm(e.target.value)
    const onCtyChanged = e => setCty(e.target.value)
    const onMobChanged = e => setMob(e.target.value)

    useEffect(() => {   
        console.log(`First Name ${fnm}`)
        console.log(`Last Name ${lnm}`)
        console.log(`City ${cty}`)
        console.log(`Mobile ${mob}`)
    }, [fnm, lnm, cty, mob])

    const onLogin = ev => {
        console.log(`Form Submitted`)
        ev.preventDefault()
        console.log(ev)

        console.log(`1. First Name ${ev.target[0].value}`)
    
        console.log(`2. First Name ${ev.target.fnm.value}`)

        console.log(`3. First Name ${ev.target.elements.fnm.value}`)
    }

    return (
        <form className='container' onSubmit={onLogin}>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="text" name="fnm" className="form-control" placeholder="First name" value={fnm} onChange={onFnmChanged} />
                </div>
                <div className="col">
                    <input type="text" name="lnm" className="form-control" placeholder="Last name" value={lnm} onChange={onLnmChanged}  />
                </div>
            </div>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="text" name="cty" className="form-control" placeholder="City" value={cty} onChange={onCtyChanged}  />
                </div>
                <div className="col">
                    <input type="text" name="mob" className="form-control" placeholder="Mobile" value={mob} onChange={onMobChanged}/>
                </div>
            </div>
            <div className="row g-3 mt-2">
                <div className="col">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </div>
        </form>
    )
}
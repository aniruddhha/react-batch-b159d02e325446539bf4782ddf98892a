import { useState } from "react"
import { loginCall } from "./login-thunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  { selectError } from './login-slice'

export function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const success = useSelector(selectError)

    const [frm, setFrm] = useState({ email : '', password : '' })

    const onCtrCh = e => {
        const dt = { [e.target.name] : e.target.value }
        setFrm({ ...frm , ...dt} )
    }

    const onLogin = e => {
        e.preventDefault()
        console.log(frm)

        dispatch(loginCall(frm)).then( () => {
            if(success) {
                navigate('/')
            }
        } )
    }

    return (
        <div className="container">
            <div className='mt-3 d-flex flex-row justify-content-center align-items-center bg bg-primary'>
                <h1 className="text-white"> 🔐 LOGIN</h1>
            </div>
            <div className='row d-flex flex-row justify-content-center align-items-center'>
                <div className="col-3">
                    <form className="mt-2" onSubmit={onLogin}>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={frm.email} onChange={onCtrCh}/>
                            <label htmlFor="floatingInput">✉️ Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={frm.password} onChange={onCtrCh}/>
                            <label htmlFor="floatingPassword"> 🔑 Password</label>
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-2">
                            <input className="btn btn-primary" type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
                { success &&  (<div className="row">
                                <p className="alert alert-danger"> Invalid Creds </p>
                            </div>)
                }
            </div>
        </div>
    )
}
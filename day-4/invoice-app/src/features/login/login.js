export function Login() {
    return (
        <div className="container">
            <div className='mt-3 d-flex flex-row justify-content-center align-items-center bg bg-primary'>
                <h1 className="text-white"> 🔐 LOGIN</h1>
            </div>
            <div className='row d-flex flex-row justify-content-center align-items-center'>
                <div className="col-3">
                    <form className="mt-2">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">✉️ Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword"> 🔑 Password</label>
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-2">
                            <input className="btn btn-primary" type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
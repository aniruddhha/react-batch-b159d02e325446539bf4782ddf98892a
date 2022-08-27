import { useEffect, useState } from "react"

export function ApiCaller() {
    
    // window, document, localStorage, sessionStorage, localtion, media, console

    const [user, setUser] = useState({ })
    const [wd, setWd] = useState(0)
    const [ht, setHt] = useState(0)
 

    const apiGetCall = () => {
        fetch('https://reqres.in/api/users/1')
        .then(res => res.json())
        .then(us => setUser(us)) // bad practice
    }

    const apiPostCall = () => {
        const reqOps = { 
            method : 'POST',
            headers : { 'Content-Type'  : 'application/json'},
            body : JSON.stringify( { name : 'abc', job : 'bbc' })
        }

        fetch('https://reqres.in/api/usres/', reqOps)
        .then( res => res.json())
        .then(console.log)
    }

    useEffect( () => {
        console.log('First useEffect -> every time')
    })

    useEffect( () => {
        apiGetCall()
        console.log('Second useEffect -> first time')
    }, []) // on first render

    useEffect( () => {
        console.log('Called -> Third useEffect ' +Date.now())
    }, [user]) // on change in the user object

    useEffect(() => {

        const mth = (e) => {
            console.log(e.target.outerWidth)
            console.log(e.target.outerHeight)
        }

        console.log('useEffect -> cleanup demo')

        window.addEventListener('resize', mth )

        return () => {
            window.removeEventListener('resize',mth)
        }
    }) // useEffect with clean up

    //  apiGetCall() // calling it here is bad practice. => useCallback and useEffect
    // apiPostCall()

    return (
        <>
            <div>{user.data && user.data.first_name}</div>
            <div>
                <input type='button' value='Okay' onClick= { () => apiGetCall() } />
            </div>
        </>
    )
}
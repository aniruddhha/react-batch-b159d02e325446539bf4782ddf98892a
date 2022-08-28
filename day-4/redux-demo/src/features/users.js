import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './rest-fetch-usres'
import { selectUsers, selectUsersError } from './users-slice'

export const UsersList = () => {

    const users = useSelector(selectUsers)
    const error = useSelector(selectUsersError)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const uiUs = users.map(usr => <p key={usr.id}>{usr.email}</p>) 

    return (
        <>
            <div>
                {uiUs}
            </div>
            <div>
                {error}
            </div>
        </>
    )
}
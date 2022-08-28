import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectUsers,
    fetchUsers
} from './users-slice';

export function Users() {

    const users = useSelector(selectUsers);
    
    const dispatch = useDispatch();

    useEffect( () => { dispatch(fetchUsers()) }, [] )

    const us = users.map( usr => <>{usr.email}</> )

    return (
        <div>
            {us}
        </div>
    )
}
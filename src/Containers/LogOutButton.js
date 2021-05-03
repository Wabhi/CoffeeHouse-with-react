import React from 'react'
import './LogOutButton.css'
import {auth} from "../FireBase/Firebase"
import { useDispatch } from "react-redux"
import {useHistory} from "react-router-dom"
import { logout } from '../features/userSlice'
const LogOutButton = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    //when user logout then take to him homepage not login page.
    const handleLogOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
            history.replace('/')
       })
    }
    return (
        <button className="logOut" onClick={handleLogOut}>
            Log out
        </button>
    )
}

export default LogOutButton

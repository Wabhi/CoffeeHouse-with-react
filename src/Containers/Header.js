import React from 'react'
import { Link } from 'react-router-dom'
import { Example } from '../Farmer-motions/Example'
import FindStore from './FindStore'
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import SignInButton from "../Containers/SignInButton"
import SignUpButton from "../Containers/SignUpButton"
import LogOutButton from "../Containers/LogOutButton"
import './Header.css'
import Image from "../Coffee/CoffeeHouse.png"
import OrderNow from './OrderNow'

const Header = ({pageMenu}) => {
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <div className={`header ${pageMenu && "header_pageMenu"}`}>
            <div className="header_left">
                <Link to="/" className="header_logo1">
                    <img src={Image} alt=""/>
                </Link>
                <Link to="/menu" className="header_link">
                    Menu
                </Link>
                <Link to="#" className="header_link">Rewards</Link>
                <Link to="#" className="header_link">Gift Cards</Link>
            </div>
            <div className="header_right">
                <Example />
                <FindStore />
                {/* user condition.................................*/}
                {!user
                    ?
                    <>
                        <Link to="/account/signin">
                            <SignInButton/>
                        </Link>
                        <Link to="/account/create">
                            <SignUpButton/>
                        </Link>
                    </>
                    :
                    <div className="header_logout">
                        {pageMenu ? <LogOutButton/> : <Link to="/menu"><OrderNow/></Link>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Header

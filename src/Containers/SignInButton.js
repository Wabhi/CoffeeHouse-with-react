import React from 'react'
import { Link } from 'react-router-dom'
import './SignInButton.css'

const SignInButton = () => {
    return (
        <Link className="signin" to="/account/signin">
                Sign in
        </Link>
    )
}

export default SignInButton

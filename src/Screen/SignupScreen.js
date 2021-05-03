import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../Containers/SignupForm'
import "./SignupScreen.css"
import FooterSecond from "../Containers/FooterSecond"
import Image from "../Coffee/CoffeeHouse.png"

const SignupScreen = () => {
    return (
        <div className="signupScreen">
            <div className="signupScreen_header">
                <Link to="/">
                    <img src={Image} alt="CoffeeHouse"/>
                </Link>
            </div>
            <h1 className="signupScreen_heading">Create an account</h1>
            <div className="signupScreen_reward">
            <h4>COFFEEHOUSE® REWARDS</h4>
            <p>
                Join CoffeeHouse Rewards to earn Stars for free food and drinks, any way
                you pay. Get access to mobile ordering, a birthday Reward, and{" "}
                <Link to="#">more</Link>.
            </p>
            </div>
            <SignupForm />
            <FooterSecond alignItems="center" flexDirection="column"/>

        </div>
    )
}

export default SignupScreen

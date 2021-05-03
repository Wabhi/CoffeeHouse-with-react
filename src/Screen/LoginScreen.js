import React, { useState } from 'react'
import "./LoginScreen.css"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import { TextField } from '@material-ui/core'
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FormSubmit from "../Containers/FormSubmit"
import FooterSecond from '../Containers/FooterSecond';
import { auth } from "../FireBase/Firebase"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import Image from "../Coffee/CoffeeHouse.png"

const LoginScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    
    //fireBase authentication...............................
    const onSubmit = ({email,password}) => {
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName
               }))
           }).catch(error=>alert(error.message))  
    }

    //const onSubmit = data => console.log(data);
    return (
        <div className="loginScreen">
            <div className="loginScreen_left">
                <Link to="/">
                    <img src={Image} alt="coffeeHouse" />
                </Link>
            </div>
            <h4 className="login_section">Sign in or create an account</h4>
            <div className="loginScreen_right">
                <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
                    <div className="loginScreen_inputContainer">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Email"
                            type="email"
                            name="email"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="loginScreen_input"
                            {...register("email", { required: true })}
                            />
                           {errors.email && (
                            <div className="loginScreen_error">
                                <CloseIcon fontSize="small" />
                                <span style={{color:"red",marginBottom:"10px"}}>Enter your email.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="loginScreen_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="loginScreen_inputContainer">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type={showPassword?"text":"password"}
                            name="password"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "600" } }}
                            className="loginScreen_input"
                            {...register("password", { required: true })}
                            />
                            {showPassword ?
                                (<VisibilityRoundedIcon className="loginScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                                : (<VisibilityOffRoundedIcon className="loginScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                            }
                           {errors.password && (
                            <div className="loginScreen_error">
                                <CloseIcon fontSize="small" />
                                <span style={{color:"red",marginBottom:"10px"}}>Enter your password.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="loginScreen_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="loginScreen_links">
                        <Link to="#">Forgot your username ?</Link>
                        <Link to="#">Forgot your password ?</Link>
                        <Link to="/account/create" className="new_one">Create new account</Link>
                    </div>
                    <FormSubmit name="Sign in" type="submit"/>
                </form>
            </div>
            <FooterSecond alignItems="center" flexDirection="column"/>
        </div>
    )
}

export default LoginScreen

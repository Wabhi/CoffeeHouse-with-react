import React from 'react'
import "./SignupForm.css"
import { useForm } from "react-hook-form"
import { TextField } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FormSubmit from "../Containers/FormSubmit"
import { useState } from 'react';
import { auth } from '../FireBase/Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useHistory } from 'react-router';
const SignupForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    // const onSubmit = (data) => {
    //     console.log(data)
    // }

    //FireBase authentication.....................................
    const onSubmit = ({ fname, lname, email, password }) => {
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                 displayName:fname
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:fname
                }))
                history.replace('/menu')
             }).catch(error=>alert(error.message))
         })
    }
    return (
        <div className="signupForm">
            <div className="signupForm_container">
                <form onSubmit={handleSubmit(onSubmit)} className="signup_form">
                    <h4 className="signup_section">Personal Information</h4>
                    <div className="signup_container">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="First Name"
                            name="fname"
                            type="text"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="signup_input"
                            {...register("fname", { required: true })}
                        />
                        {errors.fname && (
                            <div className="signupForm_error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your first name.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="signup_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="signup_container">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Last Name"
                            name="lname"
                            type="text"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="signup_input"
                            {...register("lname", { required: true })}
                        />
                        {errors.lname && (
                            <div className="signupForm_error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your last name.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="signup_reportError"/>
                            </div>
                        )}
                    </div>
                    <h4 className="signup_section">Account Information</h4>
                    <div className="signup_container">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Email"
                            name="email"
                            type="email"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="signup_input"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <div className="signupForm_error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your email address.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="signup_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="signup_container">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Password"
                            name="password"
                            type={showPassword?"text":"password"}
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="signup_input"
                            {...register("password", { required: true })}
                        />
                        {showPassword ?
                            (<VisibilityRoundedIcon className="signScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                            : (<VisibilityOffRoundedIcon className="signinScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                        }
                        {errors.password && (
                            <div className="signupForm_error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your password.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="signup_reportError"/>
                            </div>
                        )}
                    </div>
                    <h4 className="signup_reward">
                        COLLECT MORE STARS & EARN REWARDS 
                    </h4>
                    <span className="signup_span">Email is a great way to know about offers and what's new from CoffeeHouse.</span>
                    <FormSubmit name=" Create Account" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default SignupForm

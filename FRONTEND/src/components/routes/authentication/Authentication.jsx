import React from "react";
import SignUpForm from "../../SignUpForm/SignUpForm";
import SignInForm from "../../Sign-In-Form/SignInForm";
import "./authentication.scss"
function Authentication(){
    return (
    <div className="auth-container">
    <SignInForm/>
    <SignUpForm/>
    </div>)
}
export default Authentication
import React, { useState} from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { createDocFromAuth } from "../utils/fireBase/firebase.utilities";
import { signInWithGooglePopup } from "../utils/fireBase/firebase.utilities";
import FormInput from "../formInput/form-Input";
import "./Sign-in-form.scss";
function SignInForm(){
    let [FormFields,setFormFields]=useState({
        email:"",
        password:""
    });
    let {email,password}=FormFields;
    function handleChange(event){
        if(event.target.name==="email"){
            setFormFields((prevFields)=>{return {...prevFields,email:event.target.value}})
        }
        else{
            setFormFields((prevFields)=>{return {...prevFields,password:event.target.value}})
        }
    }
    async function logGoogleUser(){
        const {user}=await signInWithGooglePopup()
                createDocFromAuth(user);
        }   
    async function handleSubmit(event){
        event.preventDefault();
        let auth=getAuth();
        try {
            setFormFields({
                email:"",
                password:""
            })
            const signInRespose=await signInWithEmailAndPassword(auth,email,password);
            createDocFromAuth(signInRespose.user)
        } catch (error) {
            console.log(error);
        }
    }
    return(
    <div className="sign-in-container">
     <h2>Already have an account </h2>
    <span>Sign in with Email and Password</span>
    <form onSubmit={handleSubmit}>
    <FormInput placeholder="Email" type="email" name="email" value={email} onChange={handleChange}/>
    <FormInput placeholder="Password" type="password" name="password" value={password} onChange={handleChange}/>
    <button className="button-container" type="submit">submit</button>
    </form>
    <button type="button" className="button-container google-sign-in" onClick={logGoogleUser}> sign in with Google</button>
    </div>)
}
export default SignInForm
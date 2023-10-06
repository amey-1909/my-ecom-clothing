import React, { useState }  from "react";
import FormInput from "../formInput/form-Input";
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {createDocFromAuth} from "../utils/fireBase/firebase.utilities";
import "./SignUpForm.styles.scss"
function SignUpForm(){
    let [formFields,setFormFields]=useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    async function handleSubmit(event){
        event.preventDefault();
        if(password===confirmPassword){
            const auth=getAuth();
        try {
            setFormFields({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""})
            const response=await createUserWithEmailAndPassword(auth,email,password);
            createDocFromAuth(response.user,{displayName});
        } catch (error) {
            console.log(error);
            alert("try again")
        }
        }   
        else{
            alert("password and confirm password must be same")
        }
    }
    let{displayName,email,password,confirmPassword}=formFields;
    function handleChange(event){
        if(event.target.name==="displayName"){
            setFormFields((prevFields)=>{return {...prevFields,displayName:event.target.value}})
        }
        else if(event.target.name==="email"){
            setFormFields((prevFields)=>{return {...prevFields,email:event.target.value}})
        }
        else if(event.target.name==="password"){
            setFormFields((prevFields)=>{return {...prevFields,password:event.target.value}})
        }
        else{
            setFormFields((prevFields)=>{return {...prevFields,confirmPassword:event.target.value}})
        }
    }
    return (
    <div className="sign-up-container">
    <h2>Don't have an account </h2>
    <span>Sign up with Email and Password</span>
    <form onSubmit={handleSubmit}>
        <FormInput placeholder="Display Name" name="displayName" type="text" value={displayName} onChange={handleChange} />
        <FormInput placeholder="Email" name="email" type="email" value={email} onChange={handleChange}/>
        <FormInput placeholder="Password" name="password" type="password" value={password} onChange={handleChange}/>
        <FormInput placeholder="Confirm Password" name="confirmPassword" type="password" value={confirmPassword} onChange={handleChange}/>
        <button className="button-container" type="submit">submit</button>
    </form>
    </div>)
}
export default SignUpForm;
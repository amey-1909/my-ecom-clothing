
import { signInWithGooglePopup } from "../utils/fireBase/firebase.utilities";
import React, { useState } from "react";

function SignIn(){
    let [name,setName]=useState();
    let [email,setEmail]=useState();
async function logGoogleUser(){
const {user}=await signInWithGooglePopup()
            console.log(user);
    }
    return (
    <div>
    <h1>sign In page</h1>
    <form action="http://localhost:5000/signIn" method="post">
        <input name="name" type="text" onChange={(event)=>{setName(event.target.value)}}></input>
        <input name="email" type="email" onChange={(event)=>{setEmail(event.target.value)}}></input>
        <button  type="submit"></button>
    </form>
    <button onClick={logGoogleUser}> sign in with Google</button>
    </div>)
}
export default SignIn
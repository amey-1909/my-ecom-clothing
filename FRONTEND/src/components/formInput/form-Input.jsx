import React from "react";
import "./formInput.styles.scss"
function FormInput(Props){
    return (
    <div className="group">
    <input className="form-input" {...Props}></input>
    </div>)
}
export default FormInput
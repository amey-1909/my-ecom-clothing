import React from "react";
import CatagorieContainer from "../catagories/categories-container";
import catagories from "../catagories/categories";
function home(){
return <CatagorieContainer catagories={catagories}/>
}
export default home
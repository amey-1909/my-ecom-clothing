import React from "react";
import "./categories.scss"
function CatagorieContainer(props){
return(<div className="categories-container">
    {props.catagories.map((catagory)=>{
    return (
    <div key={catagory.id}className="category-container" style={{backgroundImage:`url(${catagory.imageUrl})`}}>
        <div className="category-body-container">
        <h2>{catagory.title}</h2>
        <p>shop now</p>
        </div>
        
    </div>)
})}
</div>)
}
export default CatagorieContainer;
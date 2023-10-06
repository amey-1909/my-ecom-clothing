import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../product-container/product-Container";
function CatagorieProducts({catagories}){
    let [items,setItems]=useState([])
    let {title}=useParams();
    console.log(items)
    useEffect(()=>{
        if(catagories.length!==0){
            let {items}=catagories.find(catagorie=>{
                return catagorie.title===title
            })
            setItems(items);
        }
    },[title,catagories])    
    return(
        <div >
        <h1><span>{title}</span></h1>
            <div className="Products-Container">
            {items.map(product=>{
        return<ProductContainer key={product.id} image={product.imageUrl} name={product.name} price={product.price}/>
    })}
            </div>
        </div>)
}
export default CatagorieProducts;
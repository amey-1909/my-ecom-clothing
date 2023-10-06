import React, { Fragment} from "react";
import ProductContainer from "../product-container/product-Container"
import "./CategoriesPreview.scss";
import { Link } from "react-router-dom";
function CatagoriesPreview({catagories}){
return(
<div >
{catagories.map(({title,items})=>{
    return<Fragment>
    <h1><Link to={title}>{title}</Link></h1>
    <div className="Products-Container">
    {items.filter((item,index)=>{
        return index<4;
    }).map(product=>{
        return<ProductContainer key={product.id} image={product.imageUrl} name={product.name} price={product.price}/>
    })}
    </div>
    </Fragment>
})}
</div>)
}
export default CatagoriesPreview
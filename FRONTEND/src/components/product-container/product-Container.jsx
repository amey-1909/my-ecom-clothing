import React from "react";
import {useDispatch,useSelector} from "react-redux"
import "./product-card.styles.scss"
import { addToCart } from "../../Store/cartReducer/cartAction";
import { CartItemsSelector } from "../../Store/cartReducer/cartSelector";
import { isCartOpenSelector } from "../../Store/cartReducer/cartSelector";
function ProductContainer(product){
    let CartItems=useSelector(CartItemsSelector)
    let isCartOpen=useSelector(isCartOpenSelector)
    let dispatch=useDispatch()
    let {image,name,price}=product;
return<div className="product-card-container">
    <img src={image} alt={name}></img>
    <div className="footer"> 
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <button className="button-container inverted" onClick={()=>{
        dispatch(addToCart(CartItems,product,isCartOpen))
    }}>Add to Cart</button>
    </div>
</div>
}
export default ProductContainer;
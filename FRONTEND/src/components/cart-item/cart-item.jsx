import React from "react";
import "./cart-item.styles.scss"
function CardItem({image,name,price,quantity}){
return (<div className="cart-item-container">
<img src={image} alt={name}></img>
<div className="item-details">
<span className="name">{name}</span>
<span>{price+"*"+quantity}</span>
</div>
</div>)
}
export default CardItem;
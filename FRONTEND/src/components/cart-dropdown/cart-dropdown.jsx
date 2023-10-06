import React from "react";
import "./cart-dropdown.styles.scss";
import CardItem from "../cart-item/cart-item";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItemsSelector, isCartOpenSelector } from "../../Store/cartReducer/cartSelector";
import { toggleIsCartOpen } from "../../Store/cartReducer/cartAction";
function CartDropdown(){
    let CartItems=useSelector(CartItemsSelector);
    let navigate=useNavigate()
    let Display=useSelector(isCartOpenSelector)
    let dispatch=useDispatch()
    function handelClick(){
        navigate("/checkout")
        dispatch(toggleIsCartOpen(true,CartItems))
    }
    return(
     <div className="cart-dropdown-container " style={Display?{display:"flex"}:{display:"none"}}>
     <div className="cart-items">
     {CartItems.map(CartItem=>{
        return <CardItem {...CartItem}/>
     })}
        </div>
        <button className="button-container" onClick={handelClick}>GO TO CHECKOUT</button>
    </div>)
}
export default CartDropdown;
import { addToCart,removeFromCart,clearItemFromCart } from "../../Store/cartReducer/cartAction";
import "./checkout-item.styles.scss" 
import { useDispatch, useSelector } from "react-redux";
import { CartItemsSelector, isCartOpenSelector } from "../../Store/cartReducer/cartSelector";
function CheckoutItem(product){
    let {image,name,quantity,price}=product;
    let isCartOpen=useSelector(isCartOpenSelector)
    let CartItems=useSelector(CartItemsSelector);
    let dispatch=useDispatch()
    return (
    <div className="checkout-item-container">
    <div className="image-container"> 
    <img src={image} alt={name}></img>
    </div>
    <span className="name">{name}</span>
    <span className="price">{price+" $"}</span>
    <span className="quantity">
    <div className="arrow" onClick={()=>{dispatch(removeFromCart(CartItems,name,isCartOpen))}}>{"<"}</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={()=>{dispatch(addToCart(CartItems,product,isCartOpen))}}>{">"}</div>
    </span>
    <div className="remove-button" onClick={()=>{dispatch(clearItemFromCart(CartItems,name,isCartOpen))}}>&#xd7;</div>
    </div>)
}
export default CheckoutItem;

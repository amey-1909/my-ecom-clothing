import CheckoutItem from "../../checkout-items/checkout-items";
import "./checkout.styles.scss"
import { useSelector } from "react-redux";
import { CartItemsSelector ,CartTotalSelector} from "../../../Store/cartReducer/cartSelector";
function Checkout(){
    let CartItems=useSelector(CartItemsSelector)
    let CartTotal=useSelector(CartTotalSelector)
    return<div className="checkout-container">
     <div className="checkout-header">
     <span>Product</span>
     <span>Description</span>
     <span>Price</span>
     <span>Quantity</span>
     <span>Remove</span>
     </div>
     {CartItems.map(CartItem=>{
        return <CheckoutItem {...CartItem}/>
    })}
    <span className="total">{"Total="+CartTotal}</span>
    </div>
}
export default Checkout;
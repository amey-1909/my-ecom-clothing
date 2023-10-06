import {ReactComponent as ShoppingBag} from "./shopping-bag.svg"
import "./cart-icon.styles.scss"
import { CartCountSelector } from "../../Store/cartReducer/cartSelector";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsCartOpen } from "../../Store/cartReducer/cartAction";
import { CartItemsSelector } from "../../Store/cartReducer/cartSelector";
function CartIcon(){
    let CardItems=useSelector(CartItemsSelector)
    let isCartOpen=useSelector(state=>state.cart.isCartOpen)
    let CartCount=useSelector(CartCountSelector)
    let dispatch=useDispatch()
    function handleClick(){

        dispatch(toggleIsCartOpen(isCartOpen,CardItems))
    }
    return<div className="cart-icon-container" onClick={handleClick}>
        <ShoppingBag className="shopping-icon"/>
        <span className="item-count">{CartCount}</span>
    </div>
}
export default CartIcon;
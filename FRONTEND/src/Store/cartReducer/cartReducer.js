import { cartActionType } from "./cartActionType";
const INITIAL_STATE={
    isCartOpen:false,
    cartItems:[]
}
export function CartReducer(state=INITIAL_STATE,action){
    let {type,payload}=action;
    switch (type) {
        case cartActionType.ADD_CART_ITEM:
            return {state,...payload}
        case cartActionType.REMOVE_CART_ITEM:
            return {state,...payload}
        case cartActionType.CLEAR_CART_ITEM:
            return {state,...payload}
        case cartActionType.TOGGLE_IS_CART_OPEN:
            return {state,...payload}
        default:
            return state
    }
}
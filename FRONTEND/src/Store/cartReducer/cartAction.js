import { cartActionType } from "./cartActionType";
function addCartItems(CartItems,product){
    let foundIndex=CartItems.findIndex(CartItem=>{
        return CartItem.name===product.name;
    })
    if(foundIndex===-1){
            return [...CartItems,{...product,quantity:1}];
    }
    else{
            const newCartItems=CartItems.map((CartItem,index)=>{
            if(foundIndex===index){
                let quantity=CartItem.quantity+1;
                return {...CartItem,quantity:quantity}
            }
            else return CartItem;
        })
        return newCartItems;
    }
}
function ClearItem(CartItems,name){
    return CartItems.filter(CartItem=>{
        return CartItem.name!==name;
    })
}
function RemoveCartItem(CartItems,name){
    let found=CartItems.find(CartItem=>{
        return CartItem.name===name;
    })
    if(found.quantity===1){
        return ClearItem(CartItems,name);
    }
    else{
            return CartItems.map(CartItem=>{
                if(CartItem.name===name){
                    let quantity=CartItem.quantity-1;
                    return {...CartItem,quantity}
                }
                else return CartItem;
            })
    }
}
export function addToCart(CartItems,product,isCartOpen){
    let cartItems=addCartItems(CartItems,product);
return {type:cartActionType.ADD_CART_ITEM,payload:{isCartOpen:isCartOpen,cartItems:cartItems}}
}
export function removeFromCart(CartItems,name,isCartOpen){
    let cartItems=RemoveCartItem(CartItems,name);
    return {type:cartActionType.ADD_CART_ITEM,payload:{isCartOpen:isCartOpen,cartItems:cartItems}}
}
export function clearItemFromCart(CartItems,name,isCartOpen){
    let cartItems=ClearItem(CartItems,name);
    return {type:cartActionType.ADD_CART_ITEM,payload:{isCartOpen:isCartOpen,cartItems:cartItems}}
}
export function toggleIsCartOpen(isCartOpen,CartItems){
    
    return {type:cartActionType.TOGGLE_IS_CART_OPEN,payload:{isCartOpen:!isCartOpen,cartItems:CartItems}}
}
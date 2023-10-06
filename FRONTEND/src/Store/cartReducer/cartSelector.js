export const CartItemsSelector=state=>state.cart.cartItems;
export const CartCountSelector=state=>state.cart.cartItems.reduce((total,CardItem)=>total+CardItem.quantity,0);
export const isCartOpenSelector=state=>state.cart.isCartOpen;
export const CartTotalSelector=state=>state.cart.cartItems.reduce((total,CardItem)=>total+CardItem.quantity*CardItem.price,0);
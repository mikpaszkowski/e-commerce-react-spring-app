export const addItemToCart = (cartItems, currCartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === currCartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === currCartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...currCartItemToAdd, quantity: 1}]
}
import CartItem from "../components/cart-dropdown-item";

export const addItemToCart = (cartItems, currCartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === currCartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === currCartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...currCartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, currCartItemToBeRemoved) => {
  return cartItems.filter((item) => item.id !== currCartItemToBeRemoved.id);
};

export const decreaseNumOfItem = (cartItems, currCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === currCartItem.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== currCartItem.id);
  }

  return cartItems.map((item) =>
    item.id === currCartItem.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};

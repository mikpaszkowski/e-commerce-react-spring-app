import { cartActionTypes } from "./cartActionTypes";

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const decreaseNumOfItem = item => ({
    type: cartActionTypes.DECREASE_NUM_OF_ITEM,
    payload: item
})
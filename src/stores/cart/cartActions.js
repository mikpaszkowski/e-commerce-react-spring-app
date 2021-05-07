import { cartActionTypes } from "./cartActionTypes";

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
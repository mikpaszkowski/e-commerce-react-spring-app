import { cartActionTypes } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart, decreaseNumOfItem } from "../../utilities/cartUtility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case cartActionTypes.DECREASE_NUM_OF_ITEM:
      return{
        ...state,
        cartItems: decreaseNumOfItem(state.cartItems, action.payload)
      }

      default:
          return state;
  }
};

export default cartReducer;

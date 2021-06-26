import SHOP_LIST_DATA from "../../assets/shop.list.data";
import {ShopActionTypes} from "./shopTypes";

const INITIAL_STATE = {
    collections: SHOP_LIST_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTION:
            return{
               ...state,
               collections: action.payload 
            }
        default:
            return state;
    }
};

export default shopReducer;
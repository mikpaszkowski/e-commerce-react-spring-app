import SHOP_LIST_DATA from "../../assets/shop.list.data";

const INITIAL_STATE = {
    collections: SHOP_LIST_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default shopReducer;
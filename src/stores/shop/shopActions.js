import {ShopActionTypes} from "./shopTypes";


export const updateCollection = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})
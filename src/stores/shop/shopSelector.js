import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
    caps: 1,
    jackets: 2,
    womens: 3,
    mens: 4,
    kids: 5,
    sets: 6,
    jeans: 7,
    schoes: 8,
    suits: 9,
    pijamas: 10

}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);
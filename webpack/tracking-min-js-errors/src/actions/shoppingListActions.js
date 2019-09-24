import {ADD_ITEM_TO_SHOPPING_LIST} from './constants';

export function addItemToShoppingList(name) {
    throw new Error("Ohhh....");
    return {type: ADD_ITEM_TO_SHOPPING_LIST, payload: {name}};
}

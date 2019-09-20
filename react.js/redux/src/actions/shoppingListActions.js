import {ADD_ITEM_TO_SHOPPING_LIST} from './constants';

export function addItemToShoppingList(name) {
    return {type: ADD_ITEM_TO_SHOPPING_LIST, payload: {name}};
}

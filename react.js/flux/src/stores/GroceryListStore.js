import {ReduceStore} from 'flux/utils';
import GroceryListActions from "../actions/GroceryListActionTypes";
import AppDispatcher from "../AppDispatcher";

class GroceryListStore extends ReduceStore {
    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case GroceryListActions.ADD_ITEM_TO_GROCERY_LIST:
                return [...state, {item: action.item, quantity: action.quantity}];
            default:
                return state;
        }
    }
}

export default new GroceryListStore(AppDispatcher);

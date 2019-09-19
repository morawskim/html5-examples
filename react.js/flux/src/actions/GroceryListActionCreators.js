import AppDispatcher from "../AppDispatcher";
import GroceryListActions from "./GroceryListActionTypes";

const actions = {
    addItemToList(item, quantity) {
        AppDispatcher.dispatch({
            type: GroceryListActions.ADD_ITEM_TO_GROCERY_LIST,
            item,
            quantity,
        });
    }
};

export default actions;

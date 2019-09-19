import {Container} from 'flux/utils';
import GroceryListStore from "../stores/GroceryListStore";
import GroceryListActionCreators from "../actions/GroceryListActionCreators";
import AppView from "../view/AppView";

function getStores() {
    return [
        GroceryListStore,
    ];
}

function getState() {
    return {
        list: GroceryListStore.getState(),
        onAdd: GroceryListActionCreators.addItemToList
    }
}

export default Container.createFunctional(AppView, getStores, getState);
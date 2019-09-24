import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ADD_ITEM_TO_SHOPPING_LIST} from './actions/constants';
import GroceryList from './components/groceryList/GroceryList';
import ErrorStackParser from 'error-stack-parser';

window.addEventListener('error', function(e) {
    e.preventDefault();
    const {message, filename, lineno, colno, error} = e;
    let stack = null;
    if (error && error instanceof Error) {
        stack = ErrorStackParser.parse(error) || [];
    }
    const userAgent = navigator.userAgent;
    console.error({message, filename, lineno, colno, stack, userAgent});
});

const initialState = {
    shoppingList: []
};
const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_SHOPPING_LIST:
            return Object.assign({}, state, {shoppingList: [...state.shoppingList, action.payload.name]});
        break;
        default:
            return state;
    }
});

render(
    <Provider store={store}>
        <GroceryList />
    </Provider>,
    document.getElementById('react')
);

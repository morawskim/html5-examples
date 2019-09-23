import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {ADD_ITEM_TO_SHOPPING_LIST} from './actions/constants';
import GroceryList from './components/groceryList/GroceryList';
import * as messages from './translations';

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

const locale = (navigator.languages && navigator.languages[0])
|| navigator.language
|| navigator.userLanguage
|| 'en-US';
const lang = locale.split('-')[0];

render(
    <IntlProvider locale={locale} messages={messages[lang]}>
        <Provider store={store}>
            <GroceryList />
        </Provider>
    </IntlProvider>,
    document.getElementById('react')
);

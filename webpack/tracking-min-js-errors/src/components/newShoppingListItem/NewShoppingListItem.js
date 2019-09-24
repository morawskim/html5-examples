import React from 'react';
import {connect} from 'react-redux';
import {addItemToShoppingList} from '../../actions/shoppingListActions';
const ENTER_KEY_CODE = 13;

function NewShoppingListItem(props) {
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            props.addNewItemToShoppingList(event.target.value);
            event.target.value = '';
        }
    };
    return (
        <input
            placeholder="What do you want to buy?"
            onKeyDown={onKeyDown}
        />
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addNewItemToShoppingList: name => dispatch(addItemToShoppingList(name))
    };
}

export default connect(null, mapDispatchToProps)(NewShoppingListItem);

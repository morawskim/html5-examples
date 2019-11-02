import React from 'react';
import {connect} from 'react-redux';
import {addItemToShoppingList} from '../../actions/shoppingListActions';
import {injectIntl} from 'react-intl';

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
            placeholder={props.intl.formatMessage({id: 'list.placeholder'})}
            onKeyDown={onKeyDown}
        />
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addNewItemToShoppingList: name => dispatch(addItemToShoppingList(name))
    };
}

const NewShoppingListItemIntl = injectIntl(NewShoppingListItem)
export default connect(null, mapDispatchToProps)(NewShoppingListItemIntl);

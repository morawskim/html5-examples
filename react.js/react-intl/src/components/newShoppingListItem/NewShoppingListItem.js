import React from 'react';
import {connect} from 'react-redux';
import {addItemToShoppingList} from '../../actions/shoppingListActions';
import {FormattedMessage} from 'react-intl';

const ENTER_KEY_CODE = 13;

function NewShoppingListItem(props) {
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            props.addNewItemToShoppingList(event.target.value);
            event.target.value = '';
        }
    };
    return (
        <FormattedMessage id="list.placeholder">{txt => <input
            placeholder={txt}
            onKeyDown={onKeyDown}
        />}
        </FormattedMessage>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addNewItemToShoppingList: name => dispatch(addItemToShoppingList(name))
    };
}

export default connect(null, mapDispatchToProps)(NewShoppingListItem);

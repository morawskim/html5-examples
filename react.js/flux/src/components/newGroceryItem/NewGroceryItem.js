import React from 'react';

const ENTER_KEY_CODE = 13;

export default function NewGroceryItem(props) {
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            props.onAdd(event.target.value, 1);
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

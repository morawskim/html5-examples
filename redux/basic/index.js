const redux = require('redux');
const update = require('immutability-helper');

const ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO'
};

//store and default state
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return update(state, {
                $push: [{name: action.name}]
            });
            break;
        default:
            return state;
            break;
    }
}

const store = redux.createStore(redux.combineReducers({
    todos: todoReducer
}));

// action creators
const actionCreatorNewTodo = name => {return {type: ACTION_TYPES.ADD_TODO, name}}; 

store.subscribe((...args) => console.log("cos sie zmienilo...", args, store.getState()));

store.dispatch(actionCreatorNewTodo('nowe zadanie'));
store.dispatch(actionCreatorNewTodo('kolejne zadanie'));

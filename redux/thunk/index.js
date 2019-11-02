const redux = require('redux');
const update = require('immutability-helper');
const thunk = require('redux-thunk').default;

const ACTION_TYPES = {
    ADD_TODO_STARTED: 'ADD_TODO_STARTED',
    ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
    ADD_TODO_FAILURE: 'ADD_TODO_FAILURE',
};

//store and default state
const todoReducer = (state = {tasks: [], isAdding: false}, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO_SUCCESS:
            return update(state, {
                tasks: {
                    $push: [{name: action.name}]
                },
                isAdding: {
                    $set: false
                }
            });
            break;
        case ACTION_TYPES.ADD_TODO_STARTED:
            return update(state, {
                isAdding: {
                    $set: true
                }
            });
        default:
            return state;
            break;
    }
}

const store = redux.createStore(redux.combineReducers({
    todos: todoReducer
}), redux.applyMiddleware(thunk));


// action creators
const actionCreatorNewTodoSuccess = name => {return {type: ACTION_TYPES.ADD_TODO_SUCCESS, name}};
const actionCreatorNewTodoStarted = () => {return {type: ACTION_TYPES.ADD_TODO_STARTED}};
const actionCreatorNewTodoFailure = error => {return {type: ACTION_TYPES.ADD_TODO_FAILURE, error}};

const addTodo = name => {
    return dispatch => {
        dispatch(actionCreatorNewTodoStarted());
        setTimeout(() => {
            dispatch(actionCreatorNewTodoSuccess(name));
        }, 1500);
    };
};

store.subscribe((...args) => console.log("cos sie zmienilo...", args, store.getState()));
store.dispatch(addTodo('nowe zadanie'));

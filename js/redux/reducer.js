import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST} from "./actionTypes";

const defultState = {
    inputValue: 'white sopmethings',
    list: [],
};

export default (state = defultState, action) => {
    console.log(state, action);
    let newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT) {
        newState.inputValue = action.value;
    } else if (action.type === ADD_ITEM) {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    } else if (action.type === DELETE_ITEM) {
        newState.list.splice(action.index, 1)
    } else if (action.type === GET_LIST) {
        newState.list = action.value;
    }
    return newState;
}

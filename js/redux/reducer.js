import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM} from "./actionTypes";

const defultState = {
    inputValue: 'white sopmethings',
    list: [
        '第一条',
        '第二条',
        '第三条',
    ],
};

export default (state = defultState, action) => {
    console.log(state, action);
    let newState = state;
    if (action.type === CHANGE_INPUT) {
        newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
    } else if (action.type === ADD_ITEM) {
        newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    }else if (action.type === DELETE_ITEM) {
        newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
    }
    return newState;
}

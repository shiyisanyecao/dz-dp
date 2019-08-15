
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes.js'

const defaultState = {
    inputVaule: '123',
    list: [1, 2]
}
//reducer可以接收state，但是不能修改state
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVaule = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVaule);
        newState.inputVaule = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
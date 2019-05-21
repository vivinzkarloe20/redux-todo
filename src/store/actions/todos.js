import * as actionTypes from './actionTypes';

export const addTodo = (data) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: id
    }
}

export const completeTodo = (id) => {
    return {
        type: actionTypes.COMPLETE_TODO,
        payload: id
    }
}
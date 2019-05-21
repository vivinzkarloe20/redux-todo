import * as actionTypes from '../../store/actions/actionTypes';
// import * as updateObject from '../../store/utility';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            return { 
                ...state,
                todos: state.todos.concat(action.payload)
        }
        case actionTypes.DELETE_TODO:
            const updatedTodo = state.todos.filter(res => res.id !== action.payload);
            return {
                ...state,
                todos: updatedTodo
            }
        case actionTypes.COMPLETE_TODO:
            const selectTodo =  state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
            return {
                ...state,
                todos: selectTodo
            }
        default:  
            return state;      
    }

}

export default reducer;
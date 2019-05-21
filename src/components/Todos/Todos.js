import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

class Todos extends Component {
    render(){
        const handleDelete = (id) => {
            this.props.deleteTodo(id)
        }

        const handleComplete = (id) => {
            this.props.completeTodo(id)
        }

        const todoList = this.props.todos.length ? (
            this.props.todos.map(todo => {
                return(
                    <div className="collection-item" key={todo.id} >
                        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={() => handleComplete(todo.id)}>{todo.content}</span>
                        <button className="btn-small right" onClick={() => handleDelete(todo.id)}>X</button>
                    </div>
                )
            })
        ) : (
            <p className="center">You have nothing listed.</p>
        );

        return(
            <div className="todos collection">
                {todoList}
            </div>
        );
    }
}

// const Todos = ({ todos, props }) => {

//     console.log(props)
//     const handleDelete = (id) => {
//         // props.deleteTodo()
//         console.log(props);
//     }

//     const todoList = todos.length ? (
//         todos.map(todo => {
//             return(
//                 <div className="collection-item" key={todo.id} onClick={() => handleDelete(todo.id)}>
//                     {todo.content}
//                 </div>
//             )
//         })
//     ) : (
//         <p className="center">Test</p>
//     );

//     return (
//         <div className="todos collection">
//             {todoList}
//         </div>
//     )
    
// }

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
        completeTodo: (id) => dispatch(actionCreators.completeTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
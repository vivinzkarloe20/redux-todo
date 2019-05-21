import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid';

import * as actionCreators from '../../store/actions/index';

class AddTodo extends Component {
    state = {
        id: '',
        content: '',
        completed: false
    }
    render() {
        const handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                id: uuid(),
                content: this.state.content,
                completed: false
            }
            this.props.addTodo(data);
            this.setState({
                content: ''
            })
        }

        const handleChange = (e) => {
            this.setState({
                content: e.target.value
            })
        }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Add a todo..." type="text" onChange={handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }  
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (data) => dispatch(actionCreators.addTodo(data))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
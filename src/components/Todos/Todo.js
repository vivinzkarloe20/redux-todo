import React from 'react';

const Todo = ({todo}) => {
    return(
        <div className="collection-item" >
            {todo.content}
        </div>
    );
}



export default Todo;
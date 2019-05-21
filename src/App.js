import React from 'react';

import Todos from './components/Todos/Todos';
import AddTodo from './components/Todos/AddTodo';

const App = () => {

    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todos</h1>
            <AddTodo />
            <Todos />
        </div>
    );
}

export default App;
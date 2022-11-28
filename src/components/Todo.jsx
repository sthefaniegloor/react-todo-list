import React from 'react';
import { VscClose } from 'react-icons/vsc'


const Todo = ({todos, completeTodo, removeTodo}) => {

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>
            
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <VscClose onClick={() => removeTodo(todo.id)}
            className='delete-icon'/>
        </div>


        </div>
    ))
}

export default Todo;
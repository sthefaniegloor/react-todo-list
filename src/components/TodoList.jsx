import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
    }  

    const removeTodo = (id) => {
        const remove = [...todos].filter(todo => todo.id !== id)

        setTodos(remove);
    } 

    const completeTodo = (id) => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos);
    } 

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    );
};

export default TodoList;


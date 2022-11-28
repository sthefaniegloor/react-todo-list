import React, { useState } from 'react';


const Todoform = (props) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault(); 
        
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');

    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Type your todo here'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button className="todo-button">
                Add a new todo
            </button>
        </form>
    );
}

export default Todoform;

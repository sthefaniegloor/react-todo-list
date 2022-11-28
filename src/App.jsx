import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app-section">
      <header>
      Be productive :)
      <h1>To-do List</h1>
      </header>
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  )
}

export default App;

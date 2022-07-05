import React from 'react';
import TodoList from './components/TodoList';
import TasksProvider from './context/Context';
// import './App.css';

function App() {
  return (
    <TasksProvider>
      <div className="todo-app">
        <TodoList />
      </div>
    </TasksProvider>
  );
}

export default App;
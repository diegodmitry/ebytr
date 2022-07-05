import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';
import TodoForm from './TodoForm';

function TodoList() {
  const { datas } = useContext(GlobalContext);

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <button>Ordem alfabética</button>
      <ul id="myUL">
        {datas.map((task, index) => (
          <li key={index}>
            {task.taskName}
            <span>{task.createAt}</span>
            <span>{task.statusTask}</span>
            <button>Edit task</button>
            <button>Delete task</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
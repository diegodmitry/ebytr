import React, { useState, useContext, useEffect } from 'react';
// import { GlobalContext } from '../context/Context';
// import fetchTasksAPI from '../services/fetchAPI';
import axios from 'axios';

function TodoForm() {
  const [input, setInput] = useState();
  const [currentStatus, setCurrentStatus] = useState('pendente');

  const changeTask = (newTask) => {
    setInput(newTask)
  };

  const changeStatus = (newStatus) => {
    setCurrentStatus(newStatus)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  const request = await axios.get("http://localhost:3001/tasks");
   const postRequest = axios.post('http://localhost:3001/tasks', {
      name: input,
      status: currentStatus,
    })
    console.log(request);
    console.log(postRequest);
    setInput(''); // clean input field
  };

  return (
    <div>
      <form className='todo-form' onSubmit={ handleSubmit }>
        <input
          type='text'
          placeholder='Add task'
          value={input}
          name='text'
          className='todo-input'
          onChange={ (event) => changeTask(event.target.value) }
        />
        <select
          type='text'
          onChange={ (event) => changeStatus(event.target.value) }
          value={ currentStatus }
          name='select-status'
          className='todo-select'
        >
          <option value="pendente">Pendente</option>
          <option value="andamento">Andamento</option>
          <option value="pronto">Pronto</option>
        </select>
        <button className='todo-button'>Add task</button>
      </form>
    </div>
  )
}

export default TodoForm;
import React, { useState } from 'react';
const axios = require('axios').default;

function TodoForm(props) {
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

    //send datas to MySQL
    // console.log(props);
    // console.log(event);
    // props.onSubmit({
    //   text: input,
    // });

    // const dataToServer = {
    //   nameTask: input,
    //   statusTask: currentStatus,
    // }

    // console.log('Enviar no formato JSON: ', dataToServer);

    axios.post('http://localhost:3001/tasks', {
      name: input,
      status: currentStatus,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ nameTask: 'Fetch POST Request Example',  statusTask: currentStatus})
  // };
  // const test = await fetch('http://localhost:3001/tasks', requestOptions)
  // console.log("🚀 ~ file: TodoForm.js ~ line 50 ~ handleSubmit ~ test", test)
  //     .then(response => response.json())
  //     .then(data => console.log(data) );

    // setInput(''); // clean input field
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
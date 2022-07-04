import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState();
  const [currentStatus, setCurrentStatus] = useState('pendente');

  const changeTask = (newTask) => {
    setInput(newTask)
  };

  const changeStatus = (newStatus) => {
    setCurrentStatus(newStatus)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //send datas to MySQL
    // console.log(props);
    // console.log(event);
    // props.onSubmit({
    //   text: input,
    // });

    const dataToServer = {
      nameTask: input,
      statusTask: currentStatus,
    }

    console.log('Enviar no formato JSON: ', dataToServer);
    // console.log(currentStatus);

    // fetch('http://localhost:3001/tasks', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: JSON.stringify(dataToServer)
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });
    (async () => {
      const rawResponse = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nameTask: input, statusTask: currentStatus })
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();

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
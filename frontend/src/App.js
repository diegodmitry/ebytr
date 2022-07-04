// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TasksProvider from './context/Context';
// import './App.css';
// import logo from './logo.svg';



function App() {
  const [datas, setDatas] = useState([]);

  // const URL = 'http://localhost:3001/tasks';
  // const fetchTasksAPI = async () => {
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   setDatas(data);
  //   // return data;
  // };

  useEffect(() => {
    // axios.get('http://localhost:3001/objects')
    // .then(response => { setObjects(response.data) });
    // fetchTasksAPI();
    // console.log("🚀 ~ file: App.js ~ line 20 ~ useEffect ~ tasks", tasks)

  }, []);

  return (
    <TasksProvider>
      <div className="todo-app">
        <TodoList />
      </div>
    </TasksProvider>
  );
}

export default App;
// const app = require('./app');
require('dotenv').config();

// app.listen(process.env.PORT, () => {
//   console.log(`Escutando na porta ${process.env.PORT}`);
// });

// configurar o dotenv

const express = require('express');
const cors = require('cors');

const tasksController = require('./controller/tasks.controller');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/tasks', tasksController.getAll);

app.post('/tasks', tasksController.createTask);

app.put('/tasks/:id', tasksController.updateTask);

app.delete('/tasks/:id', tasksController.deleteTask);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(process.env.PORT);
  console.log(`Escutando na porta ${PORT}`);
});

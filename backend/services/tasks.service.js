const tasksModel = require('../models/tasks.model');

const getAll = async () => {
  const tasks = await tasksModel.getAll();

  return tasks;
};

const createTask = async ({ taskName, statusTask }) => {
  const newTask = await tasksModel.createTask({ taskName, statusTask });
  return newTask;
}

const updateTask = async ({ id, taskName, statusTask }) => {
  const updatedTask = await tasksModel.updateTask({ id, taskName, statusTask });

  return updatedTask;
};

const deleteTask = async (id) => {
  const taskHasBeenDeleted = await tasksModel.deleteTask(id);
  console.log("🚀 ~ file: tasks.service.js ~ line 22 ~ deleteTask ~ taskHasBeenDeleted", taskHasBeenDeleted)

  return taskHasBeenDeleted;
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
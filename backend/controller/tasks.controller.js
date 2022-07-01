const tasksServices = require('../services/tasks.service');

const getAll = async (_req, res) => {
  const tasks = await tasksServices.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  try {
    const { name: taskName, status: statusTask } = req.body;
    const newTask = await tasksServices.createTask({ taskName, statusTask });
    return res.status(201).json(newTask);
  } catch (err) {
    // const { status, message } = productsServices.handleError(err);
    // return res.status(404).json({ message });
    console.log(err);
  }
  // const newProduct = await tasksServices.createTask({ taskName, statusTask });
  // return newProduct;
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("🚀 ~ file: tasks.controller.js ~ line 26 ~ updateTask ~ id", id)
    const { name: taskName, status: statusTask } = req.body;
    // console.log("🚀 ~ file: tasks.controller.js ~ line 28 ~ updateTask ~ statusTask", statusTask)
    // console.log("🚀 ~ file: tasks.controller.js ~ line 28 ~ updateTask ~ taskName", taskName)

    const updatedTask = await tasksServices.updateTask({ id, taskName, statusTask });
    // console.log("🚀 ~ file: tasks.controller.js ~ line 29 ~ updateProduct ~ updatedProduct", updatedProduct)

    return res.status(200).json(updatedTask);
  } catch (err) {
    // const { status, message } = productsServices.handleError(err);
    // return res.status(status).json({ message });
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await tasksServices.deleteTask(id);

    const message = 'Task was removed.'

    // A successful response of DELETE requests SHOULD be HTTP response code 200 (OK)
    // if the response includes an entity describing the status, 202 (Accepted) 
    // if the action has been queued, or 204 (No Content) 
    // if the action has been performed but the response does not include an entity.

    return res.status(200).json({ message, status: deletedTask });
  } catch (err) {
    // return next(err.message);
    // const { status, message } = productsServices.handleError(err);
    // return res.status(status).json({ message });
    console.log(err);
  }
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
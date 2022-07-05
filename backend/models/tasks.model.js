const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM Ebytr.Tasks;';
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createTask = async ({ taskName, statusTask }) => {
  const query = 'INSERT INTO Ebytr.Tasks (taskName, statusTask) VALUES (?, ?);';

  const [{ insertId }] = await connection.execute(query, [taskName, statusTask]);

  return { id: insertId, taskName, statusTask };
};

const updateTask = async ({ id, taskName, statusTask }) => {
  const query = 'UPDATE Ebytr.Tasks SET taskName = ?, statusTask = ? WHERE id = ?;';

  await connection.execute(query, [taskName, statusTask, id]);

  return { id, taskName, statusTask };
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM Ebytr.Tasks WHERE id = ?;';

  await connection.execute(query, [id]);

  return true;
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};


// get data from DB
// SELECT DATE(createAt) FROM Ebytr.Tasks;
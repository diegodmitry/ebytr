const URL = 'http://localhost:3001/tasks';
const fetchTasksAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchTasksAPI;
import React, { useContext, useState } from "react";
import axios from "axios";
const TaskContext = React.createContext();

function Provider({ children }) {
  const [taskArray, setTaskArray] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    setTaskArray(response.data);
  };
  const sendTasks = async (title, task) => {
    if (
      (title.trim() == null) |
      (title.trim() == "") |
      (task.trim() == null) |
      (task.trim() == "")
    ) {
      alert("Please enter a valid task");
    } else {
      const response = await axios.post("http://localhost:3000/posts", {
        title,
        task,
      });
      const value = [...taskArray, response.data];
      setTaskArray(value);
    }
  };
  const deleteTitle = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    const value = taskArray.filter((item) => {
      return id != item.id;
    });
    setTaskArray(value);
  };

  const updateTask = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/posts/${id}`, {
      title: updatedTitle,
      task: updatedTaskDesc,
    });
    const updatedTasks = taskArray.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, task: updatedTaskDesc };
      }
      return task;
    });
    setTaskArray(updatedTasks);
  };

  const sherdedComponents = {
    taskArray,
    sendTasks,
    fetchData,
    deleteTitle,
    updateTask,
  };
  return (
    <>
      <TaskContext.Provider value={sherdedComponents}>
        {children}
      </TaskContext.Provider>
    </>
  );
}

export { Provider };
export default TaskContext;

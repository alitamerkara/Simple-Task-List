import AddTask from "./AddTask";
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";

function PrintTask({ task }) {
  const [edit, setEdit] = useState(false);
  const { updateTask, deleteTitle } = useContext(TaskContext);

  const editTask = (event) => {
    event.preventDefault();
    setEdit(true);
  };
  const deleteTask = (event) => {
    event.preventDefault();
    deleteTitle(task.id);
  };
  const createTask = (id, title, task) => {
    if (
      (title.trim() == null) |
      (title.trim() == "") |
      (task.trim() == null) |
      (task.trim() == "")
    ) {
      alert("please enter a valid task");
    } else {
      setEdit(false);
    }
    updateTask(id, title, task);
  };

  return (
    <>
      {edit ? (
        <AddTask newEdit={edit} create={createTask} prop={task} />
      ) : (
        <div className="task-container">
          <form className="task-form">
            <h2>Your Task</h2>
            <p className="print-task">{task.title}</p>
            <h2>Todos</h2>
            <p className="print-task">{task.task}</p>
            <button className="edit" onClick={editTask}>
              Edit
            </button>
            <button className="delete" onClick={deleteTask}>
              Delete
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default PrintTask;

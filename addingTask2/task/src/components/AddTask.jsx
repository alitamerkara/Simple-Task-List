import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

function AddTask({ prop, newEdit, create }) {
  const { sendTasks } = useContext(TaskContext);

  const [title, setTitle] = useState(prop ? prop.title : "");
  const [task, setTask] = useState(prop ? prop.task : "");
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeTask = (event) => {
    setTask(event.target.value);
  };

  const AddTask = (event) => {
    event.preventDefault();
    if (newEdit) {
      create(prop.id, title, task);
    } else {
      sendTasks(title, task);
      setTitle("");
      setTask("");
    }
  };

  return (
    <>
      {""}
      {newEdit ? (
        <div className="edit-container">
          <form className="edit-form">
            <h2>Please Edit Your Task</h2>
            <label className="edit-label">Title</label>
            <input
              className="edit-input"
              value={title}
              onChange={changeTitle}
            />
            <label className="edit-label">Enter Task</label>
            <textarea
              className="edit-input"
              cols="30"
              rows="5"
              value={task}
              onChange={changeTask}
            ></textarea>
            <button className="edit-button" onClick={AddTask}>
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <form className="form">
            <h2>Please Add a Task</h2>
            <label className="form-label">Title</label>
            <input
              className="form-input"
              value={title}
              onChange={changeTitle}
            />
            <label className="form-label">Enter Task</label>
            <textarea
              className="form-input"
              cols="30"
              rows="5"
              value={task}
              onChange={changeTask}
            ></textarea>
            <button className="form-button" onClick={AddTask}>
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddTask;

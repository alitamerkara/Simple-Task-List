import PrintTask from "./PrintTask";
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";

function CurrentTask() {
  const { taskArray } = useContext(TaskContext);

  return (
    <>
      <div className="task-body">
        {taskArray?.map((task, index) => {
          return <PrintTask task={task} key={index} />;
        })}
      </div>
    </>
  );
}

export default CurrentTask;

import { useContext, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import CurrentTask from "./components/CurrentTask";
import TaskContext from "./context/TaskContext";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const { fetchData } = useContext(TaskContext);
  return (
    <div className="html">
      <div className="body">
        <AddTask />
        <h1>Tasks</h1>
        <CurrentTask />
      </div>
    </div>
  );
}

export default App;

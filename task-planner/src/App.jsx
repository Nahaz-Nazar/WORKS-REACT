import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState(
    "Add a task to get started!"
  );
  const [isAdded, setIsAdded] = useState(false);

  function handleAddTask(event) {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setIsAdded(true);
  }

  return (
    <div className="container mt-5">
      <h1 className={isAdded ? "light-blue" : ""}>
        React Task Planner
      </h1>

      <div className="card p-4 mb-4">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter a task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Task
          </button>
        </form>
      </div>

      <TaskList
        tasks={tasks}
        message={message}
      />
    </div>
  );
}

export default App;

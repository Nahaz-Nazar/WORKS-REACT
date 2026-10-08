function TaskList({ tasks, message }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <p>{message}</p>
    </div>
  );
}

export default TaskList;
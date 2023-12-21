import React, { useState } from "react";

const AddTasks = ({ task, setTask }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((prevTask) => [
      ...prevTask,
      {
        task: taskName,
        status: status,
        priority: priority,
        id: new Date(),
      },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "newTask") {
      setTaskName(value);
    }
    if (name === "priority") {
      setPriority(value);
    }
    if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <div className="taskForm">
      <form onSubmit={handleSubmit}>
        <input
          className="newTask"
          name="newTask"
          value={taskName}
          placeholder="Add Task"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <select
          value={priority}
          name="priority"
          onChange={handleChange}
          required
        >
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select value={status} name="status" onChange={handleChange} required>
          <option value="">Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Complete</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTasks;

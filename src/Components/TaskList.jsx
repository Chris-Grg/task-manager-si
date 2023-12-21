import React from "react";

const TaskList = ({
  handleDelete,
  handleCheck,
  handlePriority,
  task,
  searchResults,
}) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <th>Name</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Actions</th>

        {(searchResults.length > 0 ? searchResults : task).map((t) => (
          <tr key={t.id}>
            <td style={{ display: "table-cell" }}>
              <input
                type="checkbox"
                checked={t.status === "completed" ? true : false}
                onChange={() => handleCheck(t.id)}
              />
              {t.task}
            </td>
            <td>
              <select
                value={t.priority}
                style={{
                  background:
                    t.priority === "high"
                      ? "red"
                      : t.priority === "medium"
                      ? "blue"
                      : "green",
                  color: "white",
                }}
                onChange={(e) => handlePriority(t.id, e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </td>
            <td>{t.status}</td>
            <td>
              <button onClick={() => handleDelete(t.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TaskList;

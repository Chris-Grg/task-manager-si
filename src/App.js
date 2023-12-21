import { useEffect, useState } from "react";
import "./App.css";
import AddTasks from "./Components/AddTasks";
import TaskList from "./Components/TaskList";
import SearchTask from "./Components/SearchTask";

function App() {
  //initial state
  const [task, setTask] = useState([
    {
      task: "program",
      status: "completed",
      priority: "high",
      id: new Date(),
    },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  //useEffect
  useEffect(() => {
    handleSort();
  }, [task]);

  //functions
  const handleSort = () => {
    setTask((prevTasks) => {
      const sortedTasks = [...prevTasks].sort((a, b) => {
        if (
          a.priority === "high" &&
          (b.priority === "low" || b.priority === "medium")
        ) {
          return -1;
        }
        if (a.priority === "medium" && b.priority === "low") {
          return -1;
        }
        if (
          (a.priority === "low" || b.priority === "medium") &&
          b.priority === "high"
        ) {
          return 1;
        }
        if (a.priority === "low" && b.priority === "medium") {
          return 1;
        } else return 0;
      });

      return sortedTasks;
    });
  };
  const handleDelete = (id) => {
    setTask((prevTasks) => {
      const deletedTasks = [...prevTasks].filter((task) => {
        return task.id !== id;
      });
      return deletedTasks;
    });
  };
  const handleCheck = (id) => {
    setTask((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "completed" ? "pending" : "completed",
          };
        }
        return task;
      });
    });
  };

  const handlePriority = (id, value) => {
    setTask((prevTasks) => {
      const updatedTasks = [...prevTasks].map((task) => {
        if (task.id === id) {
          task.priority = value;
        }
        return task;
      });
      return updatedTasks;
    });
  };

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <AddTasks task={task} setTask={setTask} />
        <hr />
        <TaskList
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          handlePriority={handlePriority}
          task={task}
          searchResults={searchResults}
        />
        <SearchTask task={task} setSearchResults={setSearchResults} />
      </div>
    </>
  );
}

export default App;

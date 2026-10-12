
import React, { useState, useEffect } from "react";
import "./App.css";

function TaskCard({ title, category, onDelete }) {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
        <p>Category: {category}</p>
      </div>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish React assignment",
      category: "Study",
    },
    {
      id: 2,
      title: "Return library book",
      category: "Campus",
    },
    {
      id: 3,
      title: "Group meeting",
      category: "Project",
    },
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("Task list has been updated!");
    console.log("Number of tasks:", tasks.length);
  }, [tasks]);

  function addTask() {
    if (title.trim() === "" || category.trim() === "") {
      alert("Please enter both task title and category.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app">
      <h1>Campus Task Board</h1>
      <p className="subtitle">Manage your campus tasks easily</p>

      <div className="form">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter task category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>My Tasks ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            category={task.category}
            onDelete={() => deleteTask(task.id)}
          />
        ))
      )}
    </div>
  );
}

export default App;
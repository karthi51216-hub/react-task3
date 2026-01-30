
// src/components/TodoAllInOne.jsx
import { useEffect, useState } from "react";

function TodoAllInOne() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed

  // Load from localStorage on reload
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), title: text, completed: false },
    ]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos =
    filter === "completed"
      ? todos.filter((t) => t.completed)
      : todos;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo: Input + List + Filter</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "12px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            marginRight: "10px",
            fontWeight: filter === "all" ? "bold" : "normal",
          }}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          style={{
            fontWeight: filter === "completed" ? "bold" : "normal",
          }}
        >
          Completed
        </button>
      </div>

      {/* Input + Add */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: "8px", width: "220px" }}
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>

      {/* List */}
      {filteredTodos.length === 0 ? (
        <p style={{ color: "gray", marginTop: "20px" }}>
          No todos to show
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                border: "1px solid #ccc",
                margin: "8px auto",
                padding: "8px",
                width: "320px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "gray" : "black",
                }}
              >
                {todo.title}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoAllInOne;

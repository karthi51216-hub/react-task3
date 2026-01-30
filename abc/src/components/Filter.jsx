
// src/components/TodoList.jsx
import { useState } from "react";

function Filter() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed

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
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ filter logic
  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

      <p>
        Completed: <strong>{completedCount}</strong>
      </p>

      {/* Filter buttons */}
      <div style={{ marginBottom: "15px" }}>
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
            fontWeight:
              filter === "completed" ? "bold" : "normal",
          }}
        >
          Completed
        </button>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        style={{ padding: "8px", width: "200px" }}
      />

      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>

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
                margin: "8px",
                padding: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                  color: todo.completed ? "gray" : "black",
                }}
              >
                {todo.title}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;

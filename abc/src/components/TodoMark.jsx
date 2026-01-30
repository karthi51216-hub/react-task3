
// src/components/TodoList.jsx
import { useState } from "react";

function TodoMark() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), title: text, completed: false },
    ]);
    setText("");
  };

  // ✅ toggle completed
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

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

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

      {todos.length === 0 ? (
        <p style={{ color: "gray", marginTop: "20px" }}>
          No todos yet
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {todos.map((todo) => (
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

export default TodoMark;

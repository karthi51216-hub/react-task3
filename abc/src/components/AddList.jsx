
// src/components/AddItemList.jsx
import { useState } from "react";

function AddList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setItems([...items, { id: Date.now(), name: text }]);
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Add Items</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
        style={{ padding: "8px" }}
      />

      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Add
      </button>

      {items.length === 0 ? (
        <p style={{ marginTop: "20px", color: "gray" }}>
          No items available
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "6px",
                padding: "6px",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddList;

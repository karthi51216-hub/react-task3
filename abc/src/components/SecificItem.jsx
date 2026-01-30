
// src/components/AddItemList.jsx
import { useState } from "react";

function SecificItem() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setItems([...items, { id: Date.now(), name: text }]);
    setText(""); // clear input
  };

  // ✅ remove specific item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
        <p style={{ color: "gray", marginTop: "20px" }}>
          No items available
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "6px",
                margin: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.name}</span>

              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SecificItem;

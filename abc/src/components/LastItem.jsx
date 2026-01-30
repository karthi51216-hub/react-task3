// src/components/AddItemList.jsx
import { useState } from "react";

function LastItem() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setItems([...items, { id: Date.now(), name: text }]);
    setText(""); // clear input
  };

  // ✅ remove last item
  const removeLastItem = () => {
    if (items.length === 0) return;

    setItems(items.slice(0, -1));
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

      <button
        onClick={removeLastItem}
        style={{ marginLeft: "10px" }}
        disabled={items.length === 0}
      >
        Remove Last
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

export default LastItem;

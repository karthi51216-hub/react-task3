
// src/components/AddItemList.jsx
import { useState } from "react";

function Selection() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleAdd = () => {
    if (text.trim() === "") return;

    setItems([...items, { id: Date.now(), name: text }]);
    setText("");
  };

  // ✅ toggle select / deselect
  const toggleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Add & Toggle Select Items</h2>

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
              onClick={() => toggleSelect(item.id)}
              style={{
                padding: "8px",
                margin: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
                backgroundColor:
                  selectedId === item.id ? "#bbf7d0" : "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.name}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent toggle on remove
                  removeItem(item.id);
                }}
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

export default Selection;


// src/components/LocalStorageExample.jsx
import { useEffect, useState } from "react";

function Clear() {
  const [text, setText] = useState("");

  // 🔹 retrieve data on reload
  useEffect(() => {
    const savedText = localStorage.getItem("myText");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // 🔹 save to localStorage on change
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem("myText", value);
  };

  // ✅ clear localStorage data
  const clearData = () => {
    localStorage.removeItem("myText");
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>LocalStorage Clear Example</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "8px", width: "250px" }}
      />

      <div style={{ marginTop: "15px" }}>
        <button onClick={clearData}>
          Clear Stored Data
        </button>
      </div>

      <p style={{ marginTop: "15px" }}>
        Stored value: <strong>{text || "Empty"}</strong>
      </p>
    </div>
  );
}

export default Clear;

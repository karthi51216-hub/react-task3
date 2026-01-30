
// src/components/LocalStorageExample.jsx
import { useEffect, useState } from "react";

function LocalStorageExample() {
  const [text, setText] = useState("");

  // 🔹 retrieve data on reload (component mount)
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

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>LocalStorage Persist Example</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "8px", width: "250px" }}
      />

      <p style={{ marginTop: "15px" }}>
        Stored value: <strong>{text || "Empty"}</strong>
      </p>
    </div>
  );
}

export default LocalStorageExample;

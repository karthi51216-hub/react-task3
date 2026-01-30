
// src/components/InputLength.jsx
import { useState } from "react";

function InputLength() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "8px", width: "250px" }}
      />

      <p>Length: {text.length}</p>
    </div>
  );
}

export default InputLength;

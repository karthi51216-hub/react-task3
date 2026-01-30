
// src/components/InputLimit.jsx
import { useState } from "react";

function InputLimit() {
  const [text, setText] = useState("");

  const MAX_LENGTH = 20;

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Max 20 characters"
        style={{ padding: "8px", width: "260px" }}
      />

      <p>
        Length: {text.length} / {MAX_LENGTH}
      </p>

      {text.length === MAX_LENGTH && (
        <p style={{ color: "red" }}>
          Maximum 20 characters reached
        </p>
      )}
    </div>
  );
}

export default InputLimit;

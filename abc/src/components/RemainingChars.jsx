
// src/components/RemainingChars.jsx
import { useState } from "react";

function RemainingChars() {
  const MAX_LENGTH = 20;
  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    }
  };

  const remaining = MAX_LENGTH - text.length;

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
        Remaining characters: <strong>{remaining}</strong>
      </p>

      {remaining === 0 && (
        <p style={{ color: "red" }}>
          You have reached the maximum limit
        </p>
      )}
    </div>
  );
}

export default RemainingChars;


// src/components/SelectDropdown.jsx
import { useState } from "react";

function SelectDropdown() {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Select Dropdown</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      >
        <option value="">-- Select an option --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>

      <p style={{ marginTop: "20px" }}>
        Selected value:{" "}
        <strong>{selected || "None"}</strong>
      </p>
    </div>
  );
}

export default SelectDropdown;


// src/components/CheckboxCounter.jsx
import { useState } from "react";

function CheckboxCounter() {
  const options = ["Apple", "Banana", "Orange", "Mango"];
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Checkbox Counter</h2>

      {options.map((item) => (
        <label
          key={item}
          style={{ display: "block", margin: "8px" }}
        >
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => toggleCheckbox(item)}
          />
          {" "}{item}
        </label>
      ))}

      <p style={{ marginTop: "20px" }}>
        Selected checkboxes:{" "}
        <strong>{selected.length}</strong>
      </p>
    </div>
  );
}

export default CheckboxCounter;

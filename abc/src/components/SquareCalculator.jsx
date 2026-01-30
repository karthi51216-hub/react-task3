// src/components/SquareCalculator.jsx
import { useState } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState("");

  const square =
    number === "" ? "" : Number(number) * Number(number);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Square Calculator</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "8px", width: "200px" }}
      />

      <p style={{ marginTop: "20px" }}>
        Square value: <strong>{square}</strong>
      </p>
    </div>
  );
}

export default SquareCalculator;

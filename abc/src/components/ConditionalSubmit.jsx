
// src/components/ConditionalSubmit.jsx
import { useState } from "react";

function ConditionalSubmit() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Conditional Submit Button</h2>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        {" "}I agree to the terms
      </label>

      {/* Show button only if checkbox selected */}
      {isChecked && (
        <div style={{ marginTop: "20px" }}>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalSubmit;

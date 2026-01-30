

// src/components/TextColorToggle.jsx
import { useState } from "react";

function TextColorToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleColor = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: isDark ? "#000" : "#48ee71" }}>
        This text toggles between Light and Dark
      </h2>

      <button onClick={toggleColor}>
        Toggle Text Color
      </button>
    </div>
  );
}

export default TextColorToggle;


// src/components/ConsoleLogExample.jsx
import { useEffect } from "react";

function ConsoleLogExample() {
  useEffect(() => {
    console.log("Component has loaded 🚀");
  }, []); // empty dependency → runs once on load

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Check the console</h2>
      <p>Message will appear when component loads.</p>
    </div>
  );
}

export default ConsoleLogExample;

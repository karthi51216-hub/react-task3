
// src/components/StateChangeLog.jsx
import { useEffect, useState } from "react";

function StateChangeLog() {
  const [count, setCount] = useState(0);

  // 🔔 runs whenever count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StateChangeLog;


// src/components/Counter.jsx
import { useState } from "react";

function ReachedLimit() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Count: {count}</h3>

      <button onClick={decrement} disabled={count === 0}>
        –
      </button>

      <button onClick={increment} style={{ marginLeft: "10px" }}>
        +
      </button>

      {/* Message when count > 10 */}
      {count > 10 && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Count reached limit
        </p>
      )}
    </div>
  );
}

export default ReachedLimit;

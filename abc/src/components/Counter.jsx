
import { useState } from "react";

function Counter() {
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
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>

      <span style={{ fontSize: "20px", minWidth: "30px", textAlign: "center" }}>
        {count}
      </span>

      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

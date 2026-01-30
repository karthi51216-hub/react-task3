
// src/components/LoadingExample.jsx
import { useEffect, useState } from "react";

function LoadingExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Content Loaded ✅</h2>
      )}
    </div>
  );
}

export default LoadingExample;


// src/components/Card.jsx
function Multiple({ title, description, price, children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "220px",
        margin: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>₹{price}</strong></p>

      {children}
    </div>
  );
}

export default Multiple;

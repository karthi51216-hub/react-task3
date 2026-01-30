
// src/components/Card.jsx
function Card({ title, description, children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {/* extra content */}
      {children}
    </div>
  );
}

export default Card;

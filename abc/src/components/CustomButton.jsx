
// src/components/CustomButton.jsx
function CustomButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 14px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;

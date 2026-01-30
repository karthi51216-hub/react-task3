
// src/components/Modal.jsx
function Close({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3>Modal</h3>
        <p>Click button to close modal</p>

        {/* ✅ close modal on button click */}
        <button onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Close;

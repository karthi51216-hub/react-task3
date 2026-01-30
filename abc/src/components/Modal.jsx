
// src/components/Modal.jsx
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // hide modal

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
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <h3>Modal Title</h3>
        <p>This is a simple modal.</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

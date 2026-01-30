// src/components/TabSwitcher.jsx
import { useState } from "react";

function Switcher() {
  const [activeTab, setActiveTab] = useState("home");

  const tabStyle = (tab) => ({
    padding: "8px 14px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: activeTab === tab ? "#2563eb" : "#fff",
    color: activeTab === tab ? "#fff" : "#000",
  });

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Tab Switcher</h2>

      <div style={{ marginTop: "15px" }}>
        <button style={tabStyle("home")} onClick={() => setActiveTab("home")}>
          Home
        </button>

        <button style={tabStyle("about")} onClick={() => setActiveTab("about")}>
          About
        </button>

        <button
          style={tabStyle("contact")}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {activeTab === "home" && <p>🏠 Welcome to Home tab</p>}
        {activeTab === "about" && <p>ℹ️ This is About tab</p>}
        {activeTab === "contact" && <p>📞 Contact tab content</p>}
      </div>
    </div>
  );
}

export default Switcher;

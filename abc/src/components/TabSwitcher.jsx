// src/components/TabSwitcher.jsx
import { useState } from "react";

function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Tab Switcher</h2>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => setActiveTab("home")}
          style={{
            marginRight: "10px",
            fontWeight: activeTab === "home" ? "bold" : "normal",
          }}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("about")}
          style={{
            marginRight: "10px",
            fontWeight: activeTab === "about" ? "bold" : "normal",
          }}
        >
          About
        </button>

        <button
          onClick={() => setActiveTab("contact")}
          style={{
            fontWeight: activeTab === "contact" ? "bold" : "normal",
          }}
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

export default TabSwitcher;

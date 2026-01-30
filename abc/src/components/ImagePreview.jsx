
// src/components/ImagePreview.jsx
import { useState } from "react";

function ImagePreview() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Image URL Preview</h2>

      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setIsValid(true); // reset while typing
        }}
        placeholder="Paste image URL..."
        style={{ padding: "8px", width: "320px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {url.trim() === "" ? (
          <p style={{ color: "gray" }}>Enter an image URL to preview</p>
        ) : isValid ? (
          <img
            src={url}
            alt="Preview"
            style={{
              width: "260px",
              height: "160px",
              objectFit: "cover",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            onError={() => setIsValid(false)}
          />
        ) : (
          <p style={{ color: "red" }}>Invalid image URL</p>
        )}
      </div>
    </div>
  );
}

export default ImagePreview;

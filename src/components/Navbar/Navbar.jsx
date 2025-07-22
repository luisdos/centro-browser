import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ currentUrl, onNavigate, onReload }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="hover-bar">
      <div
        className="hover-zone"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`navbar-container ${hovered ? "visible" : ""}`}>
          <div className="navbar">
            <button className="nav-btn" onClick={() => window.history.back()}>←</button>
            <input
              type="text"
              className="url-input"
              defaultValue={currentUrl}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const url = e.target.value.startsWith("http")
                    ? e.target.value
                    : "https://" + e.target.value;
                  onNavigate(url);
                }
              }}
            />
            <button className="nav-btn" onClick={() => onNavigate(currentUrl)}>Go</button>
            <button className="nav-btn" onClick={onReload}>⟳</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
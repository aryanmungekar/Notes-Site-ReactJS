import React, { useState, useEffect } from "react";
import "./ShareToggle.css"; // 👈 paste your CSS here

const ShareToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareLinks, setShareLinks] = useState({});

  useEffect(() => {
    const url = encodeURIComponent(window.location.href);
    setShareLinks({
      whatsapp: `https://wa.me/?text=${url}`,
      telegram: `https://t.me/share/url?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
    });
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("📋 Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="floating-share">
      <button className="share-toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-share"></i>
      </button>
      <div className={`floating-share-menu ${menuOpen ? "show" : ""}`}>
        <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noreferrer">
          <i className="fab fa-telegram"></i>
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <button onClick={copyLink} title="Copy">
          <i className="fas fa-link"></i>
        </button>
      </div>
    </div>
  );
};

export default ShareToggle;

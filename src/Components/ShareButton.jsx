// ShareButton.jsx
import React from "react";

const ShareButton = ({ fileUrl, title, subject }) => {
  const handleShare = async () => {
    const shareLink = `${window.location.origin}/temp/text4.html?file=${encodeURIComponent(
      fileUrl
    )}&title=${encodeURIComponent(title)}&subject=${encodeURIComponent(subject)}`;

    // ✅ Always try native share first
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - ${subject}`,
          text: "Check out this useful PDF 📄",
          url: shareLink,
        });
        return;
      } catch (err) {
        console.error("Native share cancelled or failed:", err);
        // If user cancels, we won't fall back to copy
        return;
      }
    }

    // ✅ Fallback (desktop browsers that don’t support navigator.share)
    try {
      await navigator.clipboard.writeText(shareLink);
      alert("📋 Link copied to clipboard (sharing not supported on this browser).");
    } catch (err) {
      // Last-resort fallback
      const tempInput = document.createElement("input");
      tempInput.value = shareLink;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("📋 Link copied!");
    }
  };

  return (
    <button className="share-btn" onClick={handleShare} title="Share Link">
      <i className="fa-solid fa-arrow-up-from-bracket"></i>
    </button>
  );
};

export default ShareButton;

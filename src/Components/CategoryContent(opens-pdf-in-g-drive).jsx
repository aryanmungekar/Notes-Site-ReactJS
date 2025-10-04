// CategoryContent.jsx
import React, { useState, useEffect } from "react";
import "./CategoryContent.css"; // move your CSS here
import ShareButton from "./ShareButton";

const API_KEY = "AIzaSyDVeYvprRkUxU9gwY6934UhPxbPUbmN1DU";

const CategoryContent = ({ folders }) => {
  // folders = { notes: FOLDER_ID, pyq: FOLDER_ID, solved_pyq: FOLDER_ID, uploads: FOLDER_ID }
  const categories = {
    notes: "Notes",
    pyq: "PYQ",
    solved_pyq: "Solved PYQ",
    uploads: "Uploads",
  };

  const [activeCategory, setActiveCategory] = useState("pyq");
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState({});

  const fetchDriveFiles = async (folderId) => {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,thumbnailLink,mimeType)`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.files) return [];

    return data.files.map((file) => {
      let [title, subtitle, exam] = file.name
        .replace(/\.docx$|\.pdf$/i, "")
        .split("|")
        .map((s) => s.trim());

      return {
        title: title || "",
        subtitle: subtitle || "",
        exam: exam || "",
        thumbnail: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`,
        url: `https://drive.google.com/file/d/${file.id}/view`,
      };
    });
  };

  useEffect(() => {
    Object.entries(folders).forEach(([key, folderId]) => {
      const fetchCategory = async () => {
        setLoading((prev) => ({ ...prev, [key]: true }));
        const files = await fetchDriveFiles(folderId);
        setItems((prev) => ({ ...prev, [key]: files }));
        setLoading((prev) => ({ ...prev, [key]: false }));
      };

      fetchCategory();
    });
  }, [folders]);

  const handleShare = (shareLink, categoryName) => {
    const shareUrl = window.location.origin + shareLink;
    if (navigator.share) {
      navigator
        .share({
          title: `Check this PDF on ${categoryName}`,
          text: "Useful note/PYQ from SPPU Notes:",
          url: shareUrl,
        })
        .catch((err) => console.error("Sharing failed:", err));
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Failed to copy link"));
    }
  };

  return (
    <div>
      {/* Category Buttons */}
      <div className="category-buttons">
        {Object.keys(folders).map((key) => (
          <button
            key={key}
            className={`category-button ${activeCategory === key ? "active" : ""}`}
            onClick={() => setActiveCategory(key)}
          >
            {categories[key]}
          </button>
        ))}
      </div>

      {/* Active Category Grid */}
      <div className="pdf-grid">
        {loading[activeCategory] &&
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="skeleton-card">
              <div className="skeleton-thumbnail"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          ))}

        {!loading[activeCategory] &&
          (!items[activeCategory] || items[activeCategory].length === 0) && (
            <p className="w-80">No PDFs available in {categories[activeCategory]}.</p>
          )}

        {!loading[activeCategory] &&
          items[activeCategory] &&
          items[activeCategory].map((item, idx) => {
            const shareLink = `/temp/text4.html?file=${encodeURIComponent(
              item.url
            )}&title=${encodeURIComponent(item.title)}&subject=${encodeURIComponent(
              categories[activeCategory]
            )}`;

            return (
              <a  target="_blank" rel="noreferrer">
                <div key={idx} className="pdf-card">
                <img src={item.thumbnail} alt={item.title} loading="lazy" style={{ cursor: "pointer" }} onClick={() => window.open(item.url, "_blank")} />
                <h4>{item.title}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
                {item.exam && <p>{item.exam}</p>}
                {/* <a href={shareLink} target="_blank" rel="noreferrer"> */}
                <a href={item.url} target="_blank" rel="noreferrer">
                 <i class="fa-solid fa-file-pdf"></i> Open PDF
                </a>
                <div className="share-group">
                  <ShareButton
                    fileUrl={item.url}
                    title={item.title}
                    subject={categories[activeCategory]}
                  />
                </div>

              </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};



export default CategoryContent;

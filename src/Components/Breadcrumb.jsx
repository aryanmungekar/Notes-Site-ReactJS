import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css"; // ✅ include your breadcrumb styles

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, ""); // remove trailing slash
  const segments = path.split("/").filter(Boolean);

  let fullPath = "";

  return (
    <div id="breadcrumb-container">
      <nav id="breadcrumb">
        <Link to="/"><i className="fa-solid fa-house"></i></Link>
        {segments.map((segment, i) => {
          // Remove .html from last segment
          let cleanSegment = segment;
          if (i === segments.length - 1 && segment.endsWith(".html")) {
            cleanSegment = segment.replace(/\.html$/, "");
          }

          const name = cleanSegment.replace(/-/g, " ").toUpperCase();
          fullPath += "/" + segment;

          if (i === segments.length - 1) {
            return (
              <span key={i}> &gt; <span>{name}</span></span>
            );
          } else {
            return (
              <span key={i}>
                {" "} &gt; <Link to={fullPath + "/"}>{name}</Link>
              </span>
            );
          }
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// ✅ Load Adobe SDK globally once
const loadAdobeScript = () => {
  return new Promise((resolve, reject) => {
    if (window.AdobeDC) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export default function PdfViewer() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const fileId = searchParams.get("file");
  const fileTitle = searchParams.get("title");
  const subjectName = searchParams.get("subject");

  // Build title
  const finalTitle = (() => {
    if (fileTitle && subjectName) return `${decodeURIComponent(fileTitle)} – ${decodeURIComponent(subjectName)}`;
    if (fileTitle) return decodeURIComponent(fileTitle);
    if (subjectName) return decodeURIComponent(subjectName);
    return "PDF Viewer";
  })();

  useEffect(() => {
    document.title = finalTitle;

    if (!fileId) {
      setLoading(false);
      return;
    }

    // ✅ Convert fileId to direct link
    const pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const initAdobeViewer = async () => {
      await loadAdobeScript();

      document.addEventListener("adobe_dc_view_sdk.ready", () => {
        const adobeDCView = new window.AdobeDC.View({
          clientId: "c161f467bd084fc588a45500207af2ef", // ⚡ Replace this with your actual Adobe API key
          divId: "adobe-dc-view"
        });

        adobeDCView.previewFile({
          content: { location: { url: pdfUrl } },
          metaData: { fileName: finalTitle + ".pdf" }
        }, {
          embedMode: "SIZED_CONTAINER",
          showDownloadPDF: false, // 👈 optional to hide download button
          showPrintPDF: false
        });

        setLoading(false);
      });
    };

    initAdobeViewer();
  }, [fileId, finalTitle]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="p-2 text-center bg-white shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">{finalTitle}</h1>
      </div>

      {/* PDF Container */}
      <div className="relative flex-1">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}
        {fileId ? (
          <div id="adobe-dc-view" className="w-full h-full"></div>
        ) : (
          <div className="p-4 text-center text-red-600">
            ❌ Error: No PDF File specified.
          </div>
        )}
      </div>

      {/* Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex items-center justify-between h-12 px-3 shadow-inner">
        <div className="font-bold text-gray-700 whitespace-nowrap mr-4">PUNE UNIVERSITY</div>
        <div className="overflow-hidden flex-1 relative">
          <div className="whitespace-nowrap animate-marquee">
            Insem Notes and PYQ Papers are updated for semester 5 and 7 of all branches.
            Please leave comments in community sections. That means a lot!!! Thank you.
          </div>
        </div>
      </div>

      {/* Floating Share Button */}
      <div className="fixed bottom-20 right-5 z-50">
        <div className="group relative">
          <button className="p-3 rounded-full bg-blue-600 text-white shadow-lg">
            <i className="fa-solid fa-share"></i>
          </button>
          <div className="hidden group-hover:flex flex-col gap-2 absolute bottom-14 right-0 bg-white shadow-lg rounded-lg p-2">
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-600"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href={`https://t.me/share/url?url=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-sky-500"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              title="Copy Link"
              className="text-gray-600"
            >
              <i className="fas fa-link"></i>
            </button>
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
}

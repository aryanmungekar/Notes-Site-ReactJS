import React, { useEffect, useState } from "react";
import download from "../../Images/download.png";

const Downloads = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [platform, setPlatform] = useState("unknown");

  // Detect platform
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios");
    } else if (/android/.test(userAgent)) {
      setPlatform("android");
    } else {
      setPlatform("desktop");
    }
  }, []);

  // Handle PWA install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("✅ User accepted the install prompt");
      } else {
        console.log("❌ User dismissed the install prompt");
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="download-container">
      <div className=" flex justify-center">
        <img className="h-50 md:h-70 align-center" src={download} />
      </div>
      
      <br />

      {/* Show install button only if prompt is available */}
      {showInstallBtn && platform !== "ios" && (
        <button id="installBtn" onClick={handleInstallClick}>
          Install App
        </button>
      )}
                      
      {/* Android Guide */}
      {platform === "android" && (
        <div className="guide">
          <h3>📱 How to Install on Android</h3>
          <div className="step">
            1. Open this website in <b>Google Chrome</b> on your phone.
          </div>
          <div className="step">
            2. Tap the <b>three-dot menu</b> (⋮) at the top-right corner.
          </div>
          <div className="step">3. Select <b>"Add to Home screen"</b>.</div>
          <div className="step">
            4. Confirm, and the app will appear on your home screen.
          </div>
        </div>
      )}

      {/* iOS Guide */}
      {platform === "ios" && (
        <div className="guide">
          <h3> How to Install on iOS</h3>
          <div className="step">
            1. Open this website in <b>Safari</b> on your iPhone/iPad.
          </div>
          <div className="step">
            2. Tap the <b>Share icon</b> (square with ↑ arrow).
          </div>
          <div className="step">
            3. Scroll down and select <b>"Add to Home Screen"</b>.
          </div>
          <div className="step">
            4. Confirm, and the app will appear on your home screen.
          </div>
        </div>
      )}

      {/* Desktop Guide */}
      {platform === "desktop" && (
        <div className="guide">
          <h3>💻 How to Install on PC (Chrome / Edge)</h3>
          <div className="step">
            1. Open this site in <b>Google Chrome</b> or <b>Microsoft Edge</b>.
          </div>
          <div className="step">
            2. Look for the <b>Install icon</b> ⬇️ in the address bar.
          </div>
          <div className="step">3. Click it and choose <b>Install</b>.</div>
        </div>
      )}

      <style jsx>{`
        .download-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 40px 20px;
          padding-bottom: 90px;
        }
        #installBtn {
          display: inline-block;
          background: #ffffff;
          color: #007bff;
          border: 1px solid #007bff;
          padding: 15px 25px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        #installBtn:hover {
          background: #0056b3;
          color: white;
          border: 1px solid #ffffff;
        }
        .guide {
          text-align: left;
          margin-top: 40px;
        }
        .guide h3 {
          margin-bottom: 10px;
          color: #222;
        }
        .step {
          background: #f8f9fa;
          padding: 15px;
          margin-bottom: 10px;
          border-left: 5px solid #007bff;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Downloads;

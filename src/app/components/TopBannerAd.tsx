// ...existing code...
"use client";
import { useEffect } from "react";

export default function TopBannerAd() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    try {
      const container = document.getElementById("adsterra-top");
      if (!container) return;

      // Clear previous content
      container.innerHTML = "";

      // Remove any older scripts we may have injected previously
      const oldInline = document.getElementById("adsterra-top-inline");
      const oldScript = document.getElementById("adsterra-top-script");
      if (oldInline) oldInline.remove();
      if (oldScript) oldScript.remove();

      // Inline options script
      const scriptInline = document.createElement("script");
      scriptInline.id = "adsterra-top-inline";
      scriptInline.type = "text/javascript";
      scriptInline.textContent = `
        var atOptions = {
          key : 'd8cba7ef26b26fb852cf6f01edcf353a',
          format : 'iframe',
          height : 90,
          width : 728,
          params : {}
        };
      `;

      // Remote loader (use https)
      const scriptLoader = document.createElement("script");
      scriptLoader.id = "adsterra-top-script";
      scriptLoader.type = "text/javascript";
      scriptLoader.async = true;
      scriptLoader.src = "https://www.highperformanceformat.com/d8cba7ef26b26fb852cf6f01edcf353a/invoke.js";
      scriptLoader.onerror = () => {
        // don't break the app if ad script fails
      };

      // Append to container so the ad script can target element-relative writes
      container.appendChild(scriptInline);
      container.appendChild(scriptLoader);

      // Cleanup on unmount
      return () => {
        try {
          scriptLoader.remove();
          scriptInline.remove();
        } catch (e) {}
      };
    } catch (err) {
      // Fail silently to avoid breaking the client app
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div id="adsterra-top" className="w-[728px] h-[90px] flex items-center justify-center" />
    </div>
  );
}
// ...existing code...
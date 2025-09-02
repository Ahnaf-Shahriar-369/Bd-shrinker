// ...existing code...
"use client";
import { useEffect, useState } from "react";

export default function BottomBannerAd() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const isDev = process.env.NODE_ENV === "development";
    setIsDevelopment(isDev);

    if (isDev) {
      // Skip loading real ad scripts during development
      setIsLoaded(true);
      return;
    }

    const timer = window.setTimeout(() => {
      try {
        const container = document.getElementById("adsterra-bottom");
        if (!container) {
          setIsLoaded(true);
          return;
        }

        // Clear previous content
        container.innerHTML = "";

        // Remove previous scripts if present
        const oldInline = document.getElementById("adsterra-bottom-inline");
        const oldScript = document.getElementById("adsterra-bottom-script");
        if (oldInline) oldInline.remove();
        if (oldScript) oldScript.remove();

        const scriptInline = document.createElement("script");
        scriptInline.id = "adsterra-bottom-inline";
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

        const scriptLoader = document.createElement("script");
        scriptLoader.id = "adsterra-bottom-script";
        scriptLoader.type = "text/javascript";
        scriptLoader.async = true;
        scriptLoader.src = "https://www.highperformanceformat.com/d8cba7ef26b26fb852cf6f01edcf353a/invoke.js";

        scriptLoader.onload = () => {
          setIsLoaded(true);
        };
        scriptLoader.onerror = () => {
          setIsLoaded(true);
        };

        container.appendChild(scriptInline);
        container.appendChild(scriptLoader);
      } catch (err) {
        setIsLoaded(true);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      try {
        const inline = document.getElementById("adsterra-bottom-inline");
        const loader = document.getElementById("adsterra-bottom-script");
        if (inline) inline.remove();
        if (loader) loader.remove();
      } catch {}
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[728px] min-h-[90px] flex items-center justify-center">
        <div id="adsterra-bottom" className="w-full h-[90px] flex items-center justify-center">
          {!isLoaded && (
            <div className="text-gray-500 text-sm bg-gray-100 px-4 py-2 rounded">
              Loading bottom ad...
            </div>
          )}
          {isDevelopment && isLoaded && (
            <div className="text-gray-700 text-sm bg-yellow-50 px-4 py-2 rounded border border-yellow-200">
              Ad placeholder (development mode)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// ...existing code...
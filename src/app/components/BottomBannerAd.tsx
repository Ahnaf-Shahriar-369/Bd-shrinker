"use client";
import { useEffect, useState } from "react";

export default function BottomBannerAd() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    // Check if we're in development environment
    setIsDevelopment(process.env.NODE_ENV === 'development');
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Skipping ad loading in development mode");
      setIsLoaded(true); // Mark as loaded to hide loading message
      return;
    }

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const container = document.getElementById("adsterra-bottom");
      if (!container) {
        console.log("Bottom ad container not found");
        return;
      }

      // Clear any existing content
      container.innerHTML = "";

      try {
        // Create a unique key for bottom ad to avoid conflicts with top ad
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `
          console.log('Loading bottom Adsterra ad...');
          (function() {
            var atOptions = {
              'key' : 'd8cba7ef26b26fb852cf6f01edcf353a',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
            window.atOptions_bottom = atOptions;
          })();
        `;

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.async = true;
        script2.src = "//www.highperformanceformat.com/d8cba7ef26b26fb852cf6f01edcf353a/invoke.js";
        
        script2.onload = () => {
          console.log("Bottom ad script loaded");
          setIsLoaded(true);
          
          // Check for ad content after delay
          setTimeout(() => {
            const adContent = container.querySelector('iframe') || container.querySelector('[class*="ad"]') || container.querySelector('[id*="ad"]');
            if (adContent) {
              console.log("Bottom ad content detected");
            } else {
              console.log("Bottom ad content not found - possible adblocker or approval issue");
            }
          }, 2000);
        };

        script2.onerror = (error) => {
          console.log("Bottom ad script failed to load (expected with ad blockers):", error);
          setIsLoaded(true); // Mark as loaded even if failed
        };

        // Append scripts
        document.head.appendChild(script1);
        document.head.appendChild(script2);

      } catch (error) {
        console.log("Error loading bottom ad:", error);
        setIsLoaded(true); // Mark as loaded even if error
      }
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
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
            <div className="text-gray-500 text-sm bg-yellow-100 px-4 py-2 rounded border border-yellow-300">
              Ad placeholder (ads disabled in development)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
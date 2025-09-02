// components/AdsterraBanner.tsx
"use client";
import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'd8cba7ef26b26fb852cf6f01edcf353a',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/d8cba7ef26b26fb852cf6f01edcf353a/invoke.js";

    const container = document.getElementById("adsterra-slot");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="adsterra-slot" className="w-[728px] h-[90px] border rounded-md shadow-sm" />
    </div>
  );
}

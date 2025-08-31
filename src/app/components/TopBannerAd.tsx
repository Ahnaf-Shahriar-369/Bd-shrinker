// ...existing code...
"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function TopBannerAd() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Load AdSense script if it's not already present
    if (!document.getElementById("adsbygoogle-js")) {
      const script = document.createElement("script");
      script.id = "adsbygoogle-js";
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9822891837132664";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle block my-4"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9822891837132664"
      data-ad-slot="3800916032"
      data-ad-format="auto"
      data-full-width-responsive="true"
      aria-hidden="true"
    ></ins>
  );
}
// ...existing
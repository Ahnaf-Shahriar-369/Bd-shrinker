import type { Metadata } from "next";

import "./globals.css";

import Script from "next/script";

import { Analytics } from "@vercel/analytics/next"




export const metadata: Metadata = {
  title: "ক্রিপ্টোকারেন্সি কি ভাবে কাজ করে?",
  description: "ক্রিপ্টোকারেন্সি কীভাবে কাজ করে তা সহজ ভাষায় জানুন। ব্লকচেইন, বিটকয়েন, ইথেরিয়াম এবং ডিজিটাল মুদ্রার মৌলিক ধারণা থেকে শুরু করে এর ব্যবহার, সুবিধা ও ঝুঁকি – সবকিছু এক জায়গায় এবং বাংলায়।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        {children}

        <Analytics></Analytics>

        {/* Google AdSense Script */}
        <Script
          id="adsbygoogle-init"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9822891837132664"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

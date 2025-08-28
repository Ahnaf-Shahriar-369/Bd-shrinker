import type { Metadata } from "next";

import "./globals.css";



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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

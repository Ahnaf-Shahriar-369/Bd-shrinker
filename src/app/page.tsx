// ...existing code...
import Image from "next/image";
import TopBannerAd from "./components/TopBannerAd";
import BottomBannerAd from "./components/BottomBannerAd";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ক্রিপ্টো সহজভাবে — YourSite",
    description: "সহজ বাংলায় ক্রিপ্টোকারেন্সি কী এবং কীভাবে কাজ করে।",
    url: "https://example.com",
  };

  const articles = [
    {
      id: 1,
      title: "ক্রিপ্টোকারেন্সি কী?",
      content:
        "ক্রিপ্টোকারেন্সি, বা ক্রিপ্টো, ডিজিটাল পেমেন্টের একটি রূপ। প্রচলিত মুদ্রা থেকে ভিন্ন, এগুলো ডিজিটাল ও বিকেন্দ্রীভূত।",
    },
    {
      id: 2,
      title: "ক্রিপ্টোকারেন্সি কিভাবে কাজ করে?",
      content:
        "ক্রিপ্টোকারেন্সিগুলি ব্লকচেইন প্রযুক্তির উপর ভিত্তি করে তৈরি। লেনদেন ক্রিপ্টোগ্রাফি ব্যবহার করে যাচাই করা হয়।",
    },
  ];

  return (
    <div className="relative min-h-screen text-red-600 pb-[120px] md:pb-[120px]">
      {/* Animated background with CSS classes */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[url('/bg.webp')] bg-center bg-cover filter blur-sm brightness-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>

      {/* JSON-LD for SEO */}
      <script key="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOP AD SLOT with animation */}
      <header className="w-full pt-4 pb-8 md:pb-12 lg:pb-16 opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white/95 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer transform-gpu overflow-hidden">
            <TopBannerAd />
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-[1400px] mx-auto flex gap-4 items-start px-4 md:px-6 lg:px-8 pb-8">
        {/* LEFT MAIN AD (desktop only) */}
        <aside className="hidden lg:block w-40 xl:w-48 flex-shrink-0 mt-20">
          <div className="sticky top-20">
            <div className="bg-white/90 border rounded-lg p-3 text-sm text-gray-800 shadow hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu">
              LEFT MAIN AD
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Hero section */}
            <section className="mx-auto w-full rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <Image
                      src="/chart.webp"
                      alt="Crypto chart"
                      width={1200}
                      height={800}
                      className="w-full h-auto block object-cover shadow-inner"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 leading-tight">
                      সুচনা
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-red-600/95">
                      ক্রিপ্টোকারেন্সি হল ডিস্ট্রিবিউটেড ডিজিটাল মুদ্রা।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Articles */}
            {articles.map((article) => (
              <article key={article.id} className="bg-white/55 border border-white/30 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-red-600">{article.title}</h2>
                <p className="prose prose-lg max-w-none text-red-600/90 leading-relaxed">{article.content}</p>
              </article>
            ))}
          </div>
        </main>

        {/* RIGHT MAIN AD (desktop only) */}
        <aside className="hidden lg:block w-40 xl:w-48 flex-shrink-0 mt-20">
          <div className="sticky top-20">
            <div className="bg-white/90 border rounded-lg p-3 text-sm text-gray-800 shadow hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu">
              RIGHT MAIN AD
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile bottom ad */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md z-50">
        <div className="bg-white/95 border rounded-lg shadow-lg p-2 text-center text-sm text-gray-800">MOBILE BANNER AD</div>
      </div>

      {/* Bottom banner (desktop/tablet) - fixed at viewport bottom */}
      <footer className="hidden md:flex fixed bottom-0 left-0 right-0 justify-center z-50 pointer-events-auto">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="flex justify-center pb-2">
            <BottomBannerAd />
          </div>
        </div>
      </footer>

      {/* Tailwind keyframes (if you use them in your project keep the style block) */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeInDown { from { transform: translateY(-30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes fadeInUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes fadeInLeft { from { transform: translateX(-30px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
        @keyframes fadeInRight { from { transform: translateX(30px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes bounce { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @keyframes bounceIn { 0% { transform: translate(-50%, 100px); opacity: 0 } 60% { transform: translate(-50%, -10px); opacity: 1 } 100% { transform: translate(-50%, 0); opacity: 1 } }
      `}</style>
    </div>
  );
}
//
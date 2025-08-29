import Image from "next/image"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "ক্রিপ্টো সহজভাবে — YourSite",
//   description: "সহজ বাংলায়: ক্রিপ্টোকারেন্সি কাজ করে কীভাবে, ঝুঁকি ও মূল ধারণা।",
//   metadataBase: new URL("https://example.com"), // <- replace with your real site URL
//   openGraph: {
//     title: "ক্রিপ্টো সহজভাবে — YourSite",
//     description: "সহজ বাংলায়: ক্রিপ্টোকারেন্সি কাজ করে কীভাবে, ঝুঁকি ও মূল ধারণা।",
//     url: "https://example.com",
//     siteName: "YourSite",
//     images: ["/bg.webp"],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "ক্রিপ্টো সহজভাবে — YourSite",
//     description: "সহজ বাংলায়: ক্রিপ্টোকারেন্সি কাজ করে কীভাবে, ঝুঁকি ও মূল ধারণা।",
//     images: ["/bg.webp"],
//   },
// }

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ক্রিপ্টো সহজভাবে — YourSite",
    description: "সহজ বাংলায় ক্রিপ্টোকারেন্সি কী এবং কীভাবে কাজ করে।",
    url: "https://example.com",
  }

  return (
    <div className="relative min-h-screen text-red-600">
      {/* Full-screen background image (no plain color) */}
      <div className="absolute inset-0 -z-20 bg-[url('/bg.webp')] bg-center bg-cover bg-fixed filter blur-sm brightness-105">
        {/* subtle gradient + translucent veil for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>

      {/* JSON-LD for SEO */}
      <script key="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOP AD SLOT (keeps space at top for ads) */}
      <header className="h-40 md:h-24 lg:h-28 flex items-center justify-center mb-12 md:mb-16 lg:mb-20">
        <div className="max-w-[1200px] w-full px-4 md:px-6 lg:px-8">
          <div className="bg-white/95 border border-gray-200 rounded p-2 text-center text-sm text-gray-800 shadow-sm">
            TOP BANNER AD
          </div>
        </div>
      </header>

      {/* Main layout: left/right gutters reserved for ads on large screens */}
      <div className="max-w-[1200px] mx-auto flex gap-6 items-start px-4 md:px-6 lg:px-8 mt-4">
        {/* LEFT AD (desktop only) */}
        <aside className="hidden lg:block w-48 flex-shrink-0 mt-20">
          <div className="sticky top-69">
            <div className="bg-white/90 border rounded p-3 text-sm text-gray-800 shadow">LEFT AD</div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <div className="space-y-8">
            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            {/* Hero / Intro card with elevated surface for readability */}
            <section className="mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                  {/* Left: responsive hero image */}
                  <div className="w-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-inner">
                      <Image
                        src="/chart.webp"
                        alt="Crypto chart"
                        width={1200}
                        height={800}
                        className="w-full h-auto block object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right: text content */}
                  <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 leading-tight">সুচনা</h1>
                    <p className="mt-3 text-sm md:text-base text-red-600/95">
                      ক্রিপ্টোকারেন্সি হল ডিস্ট্রিবিউটেড ডিজিটাল মুদ্রা যেখানে লেনদেন ব্লকচেইনে নথিভুক্ত হয়। এখানে কোনো কেন্দ্রীয় নিয়ন্ত্রণ
                      নেই — সকল লেনদেন পিয়ার-টু-পিয়ার নেটওয়ার্কে যাচাই করা হয়।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto w-full max-w-3xl mt-40">
              <div className="bg-white/90 border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <div className="text-gray-600 text-sm font-medium mb-2 mt-36">Middle ad 1  </div>
                
              </div>
            </section>

            {/* <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div>

            <div className="hidden mx-auto w-full max-w-3xl rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
              <div className="p-5 md:p-8 lg:p-10 h-32"></div>
            </div> */}

            {/* Article body - responsive typography */}
            <article
              className="prose prose-lg lg:prose-xl max-w-none text-red-600 mx-auto w-full mt-72"
              aria-labelledby="article-heading"
            >
              <div className="bg-white/55 border border-white/30 rounded-lg p-6 md:p-8 shadow-sm">
                <h1 className="text-xl font-semibold mb-4">ক্রিপ্টোকারেন্সি কী?</h1>

                <p>
                  ক্রিপ্টোকারেন্সি, বা ক্রিপ্টো, ডিজিটাল পেমেন্টের একটি রূপ। প্রচলিত মুদ্রা যা ভৌত অর্থের প্রতিনিধিত্ব করে, তার বিপরীতে, ক্রিপ্টোকারেন্সিগুলি সম্পূর্ণরূপে ডিজিটাল সম্পদ। যদিও মানুষ এটি প্রাথমিকভাবে অনলাইন লেনদেনের জন্য ব্যবহার করে, আপনি কখনও কখনও ভৌত সম্পদ কেনার জন্য এটি ব্যবহার করতে পারেন। যদিও ঐতিহ্যবাহী পেমেন্ট পদ্ধতিগুলি কেন্দ্রীয় ব্যাংক এবং সরকার দ্বারা নিয়ন্ত্রিত হয়, ক্রিপ্টোকারেন্সি বিকেন্দ্রীভূত, অর্থাৎ এটি একটি কেন্দ্রীয় কর্তৃপক্ষ দ্বারা নিয়ন্ত্রিত হয় না।
                </p>
              </div>
            </article>



            <section className="mx-auto w-full max-w-3xl mt-40">
              <div className="bg-white/90 border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <div className="text-gray-600 text-sm font-medium mb-2 mt-36">Middle ad 1  </div>
                
              </div>
            </section>



            <article
              className="prose prose-lg lg:prose-xl max-w-none text-red-600 mx-auto w-full mt-72"
              aria-labelledby="article-heading"
            >
              <div className="bg-white/55 border border-white/30 rounded-lg p-6 md:p-8 shadow-sm">
                <h1 className="text-xl font-semibold mb-4">ক্রিপ্টোকারেন্সি কিভাবে কাজ করে?</h1>

                <p>
                  ক্রিপ্টোকারেন্সিগুলি ব্লকচেইন প্রযুক্তির উপর ভিত্তি করে তৈরি, যা এগুলিকে অত্যন্ত নিরাপদ করে তোলে, যদিও বিশ্বাসযোগ্য এক্সচেঞ্জ বেছে নেওয়ার দায়িত্ব এখনও বিনিয়োগকারীদের উপর। লেনদেন ইস্যু, যাচাই এবং সুরক্ষিত করার জন্য ক্রিপ্টোগ্রাফিক কৌশল (কোড লেখা এবং পাঠোদ্ধার প্রক্রিয়া) ব্যবহার করা হয়। পাবলিক লেজারের মাধ্যমে, লেনদেনগুলি ট্রেসযোগ্য থাকে এবং জাল করা যায় না। এই পিয়ার-টু-পিয়ার ডিজিটাল সম্পদ ব্যবস্থা বিশ্বব্যাপী অর্থ প্রেরণ এবং গ্রহণকে দ্রুত, সহজ এবং সস্তা করে তোলে। কোনও মুদ্রা বিনিময়ের প্রয়োজন নেই, বা কোনও মোটা ফিও নেই। এই আর্থিক সম্পদগুলি ব্যবহার করে লেনদেনগুলি সর্বজনীনভাবে রেকর্ড করা হয়, ডিজিটালভাবে সংরক্ষণ করা হয় এবং এনক্রিপশনের মাধ্যমে প্রেরণ করা হয়, ট্রান্সমিশন এবং স্টোরেজের জন্য বিশদ কোডিং প্রয়োজন হয়।

ক্রিপ্টোকারেন্সি প্রকল্পগুলিকে আরও ঐতিহ্যবাহী বিনিয়োগ থেকে আলাদা করে এমন অন্যান্য উপাদানগুলির মধ্যে রয়েছে:

অ্যাক্সেসিবিলিটি। ক্রিপ্টো বিনিয়োগ ইন্টারনেট অ্যাক্সেস এবং কম্পিউটার, স্মার্টফোন বা মোবাইল ডিভাইস সহ যে কারও জন্য উন্মুক্ত।

কম লেনদেনের খরচ। ক্রিপ্টোকারেন্সি ব্লকচেইন লেনদেনের খরচ কয়েক ডলারের বেশি নয়, অনেকের দাম মাত্র পয়সা।

লেনদেনের গতি। বিশ্বব্যাপী সম্পদ প্রেরণ, গ্রহণ এবং স্থানান্তরের জন্য ক্রিপ্টোকারেন্সির চেয়ে দ্রুততর অন্য খুব কম প্রতিষ্ঠানই রয়েছে।
                </p>
              </div>
            </article>

          </div>
        </main>

        {/* RIGHT AD (desktop only) */}
        <aside className="hidden lg:block w-48 flex-shrink-0 mt-20">
          <div className="sticky top-32">
            <div className="bg-white/90 border rounded p-3 text-sm text-gray-800 shadow">RIGHT AD</div>
          </div>
        </aside>
      </div>

      {/* Mobile bottom ad */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md">
        <div className="bg-white/95 border rounded p-3 text-center text-sm text-gray-800 shadow">MOBILE BANNER AD</div>
      </div>
    </div>
  )
}

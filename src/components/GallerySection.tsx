"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

// Gallery of partner logos/cards
// TODO: Replace placeholder logos with real assets and proper links
// A pool of popular company logos (Simple Icons slugs). We'll pick a randomized
// order each mount so the gallery feels dynamic.
const partners = [
  { slug: "github", name: "GitHub" },
  { slug: "google", name: "Google" },
  { slug: "microsoft", name: "Microsoft" },
  { slug: "amazon", name: "Amazon" },
  { slug: "apple", name: "Apple" },
  { slug: "netflix", name: "Netflix" },
  { slug: "twitter", name: "Twitter" },
  { slug: "discord", name: "Discord" },
  { slug: "figma", name: "Figma" },
  { slug: "slack", name: "Slack" },
  { slug: "stripe", name: "Stripe" },
  { slug: "adobe", name: "Adobe" },
];

export default function GallerySection() {
  const { theme, resolvedTheme } = useTheme();

  // Shuffle partners to produce a random order on mount.
  // This uses simple Fisher-Yates shuffle.
  const shuffled = React.useMemo(() => {
    const arr = [...partners];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  // Build icon URLs using the Simple Icons CDN. By not specifying a color we
  // get the official brand color for each logo which looks more authentic.
  // TODO: If any icon is hard to read in dark mode we can add a small
  // background or switch to a monochrome variant per-brand.
  const logoUrls = React.useMemo(() => shuffled.map((p) => `https://cdn.simpleicons.org/${p.slug}`), [shuffled]);

  return (
    <section
      aria-label="Our partners"
      className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            Our Partners
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-300 hidden sm:block">
            Collaborators driving creative AI.
          </p>
        </div>

        <div className="rounded-lg p-3 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {logoUrls.map((url, idx) => {
            const p = shuffled[idx];
            const innerClasses =
              resolvedTheme === "dark"
                ? "w-full h-16 sm:h-20 flex items-center justify-center rounded-md bg-[#071024] shadow-none border border-transparent p-2"
                : "w-full h-16 sm:h-20 flex items-center justify-center rounded-md bg-white shadow-sm border border-gray-100 p-2";

            return (
              <article
                key={p.name}
                className="group bg-transparent border border-transparent rounded-md p-2 sm:p-3 flex items-center justify-center overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-md"
                title={p.name}
              >
                {/* Inner card changes with theme for consistent contrast */}
                <div className={innerClasses}>
                  <img
                    src={url}
                    alt={p.name}
                    loading="lazy"
                    className="object-contain max-h-12 sm:max-h-16 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
                <span className="sr-only">{p.name}</span>
              </article>
            );
          })}
        </div>

        <div className="mt-4 text-xs text-center text-gray-700 dark:text-gray-400">
          <span>Want your logo here? </span>
          <a className="font-medium underline text-blue-600 dark:text-gray-200" href="#contact">
            Contact us
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

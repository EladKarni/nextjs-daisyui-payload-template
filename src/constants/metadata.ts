// src/constants/metadata.ts
// SEO and metadata defaults

export const siteMetadata = {
  title: "Elad Karni | Software Developer & IT Specialist",
  description: "Portfolio of Elad Karni - Software Developer, Game Designer, and IT Specialist with expertise in React, C#, Xamarin, and full-stack development.",
  keywords: [
    "Elad Karni",
    "Software Developer",
    "React Developer",
    "Full Stack Developer",
    "IT Specialist",
    "Game Designer",
    "Photographer",
    "Pittsburgh PA",
    "Web Development",
    "Mobile Development",
    "React.js",
    "TypeScript",
    "Next.js",
  ] as string[],
  author: {
    name: "Elad Karni",
    url: "https://eladkarni.com",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/images/og-image.jpg",
};

export const faviconConfig = {
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
  },
};

export const openGraphDefaults = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Elad Karni Portfolio",
};

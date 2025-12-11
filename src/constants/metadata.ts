// src/constants/metadata.ts
// SEO and metadata defaults

export const siteMetadata = {
  title: "Acme Corporation",
  description: "Acme Corporation is here to help you achieve your business goals",
  keywords: [
    "business solutions",
    "consulting",
    "digital development",
    "analytics",
    "design",
    "project management",
  ] as string[],
  author: {
    name: "Acme Corporation",
    url: "https://acmecorp.com",
  },
  url: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
};

export const faviconConfig = {
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    title: "Acme Corporation",
  },
};

export const openGraphDefaults = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Acme Corporation",
};

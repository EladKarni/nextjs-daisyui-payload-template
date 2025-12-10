import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Acme Corporation | Business Solutions & Services",
    template: "%s | Acme Corporation",
  },
  description: "Leading provider of innovative business solutions. We help organizations achieve their goals through strategy, technology, and design excellence.",
  keywords: ["business solutions", "consulting", "digital services", "strategy", "technology", "design", "project management", "analytics"],
  authors: [{ name: "Acme Corporation" }],
  creator: "Acme Corporation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com/",
    title: "Acme Corporation | Business Solutions & Services",
    description: "Leading provider of innovative business solutions. We help organizations achieve their goals through strategy, technology, and design excellence.",
    siteName: "Acme Corporation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acme Corporation | Business Solutions & Services",
    description: "Leading provider of innovative business solutions. We help organizations achieve their goals through strategy, technology, and design excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

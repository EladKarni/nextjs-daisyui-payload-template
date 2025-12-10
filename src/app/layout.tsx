import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "YK Innovations | Mechanical Engineering & Rapid Prototyping",
    template: "%s | YK Innovations",
  },
  description: "Expert mechanical engineering and rapid prototyping services for businesses. We transform product concepts into functional prototypes with CAD design, 3D printing, CNC machining, and DFM analysis.",
  keywords: ["mechanical engineering", "rapid prototyping", "CAD design", "3D printing", "CNC machining", "product development", "DFM analysis", "prototyping services"],
  authors: [{ name: "YK Innovations" }],
  creator: "YK Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ykinnovations.com/",
    title: "YK Innovations | Mechanical Engineering & Rapid Prototyping",
    description: "Expert mechanical engineering and rapid prototyping services for businesses. We transform product concepts into functional prototypes.",
    siteName: "YK Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "YK Innovations | Mechanical Engineering & Rapid Prototyping",
    description: "Expert mechanical engineering and rapid prototyping services for businesses. We transform product concepts into functional prototypes.",
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

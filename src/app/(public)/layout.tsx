import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteMetadata, faviconConfig, openGraphDefaults } from "@/constants/metadata";
import NavBar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Analytics from "@/components/analytics";
import StructuredData from "@/components/structured-data";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
  creator: siteMetadata.author.name,
  openGraph: {
    ...openGraphDefaults,
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [{ url: siteMetadata.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  ...faviconConfig,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('yk-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar>
            <NavLinks />
          </NavBar>
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

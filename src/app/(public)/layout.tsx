import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getPayload } from "payload";
import config from "@/payload.config";
import { draftMode } from "next/headers";
import { fallbackFooterSection, fallbackCompanyInfo } from "@/lib/fallbackData";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import "../globals.css";
import { cn } from "@/util/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Acme Corporation",
  description: "Acme Corporation is here to help you achieve your business goals",
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

// Enable ISR with on-demand revalidation for performance
export const revalidate = 3600; // Cache for 1 hour, revalidate on-demand via webhook

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch footer and company info globally
  let footerData: any;
  let companyInfo: any;

  // Check if we're in demo mode
  const isDemoMode = process.env.DEMO_MODE === 'true';

  if (isDemoMode) {
    // Demo mode: Use fallback data only
    console.log("DEMO_MODE enabled: Using fallback footer and company info");
    footerData = fallbackFooterSection;
    companyInfo = fallbackCompanyInfo;
  } else {
    // Non-demo mode: Fetch from CMS with draft support
    const { isEnabled: isDraftMode } = await draftMode();

    try {
      const payload = await getPayload({ config });
      [footerData, companyInfo] = await Promise.all([
        payload.findGlobal({ slug: "footer-section", draft: isDraftMode }),
        payload.findGlobal({ slug: "company-info", draft: isDraftMode }),
      ]);
    } catch (error) {
      console.warn("Failed to fetch footer data from CMS:", error);
      footerData = fallbackFooterSection;
      companyInfo = fallbackCompanyInfo;
    }
  }

  return (
    <ThemeProvider>
      <Navbar>
        <NavLinks />
      </Navbar>
      {children}
      <Footer footerData={footerData} companyInfo={companyInfo} />
    </ThemeProvider>
  );
}

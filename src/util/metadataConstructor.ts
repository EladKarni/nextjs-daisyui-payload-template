import { Metadata } from "next";
import { siteMetadata, openGraphDefaults } from "@/constants/metadata";

interface MetadataConstructorOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  keywords?: string[];
  customMetadata?: Partial<Metadata>;
}

export function metadataConstructor({
  title,
  description = siteMetadata.description,
  image = siteMetadata.ogImage,
  url,
  noIndex = false,
  keywords = siteMetadata.keywords,
  customMetadata = {},
}: MetadataConstructorOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const canonicalUrl = url || siteMetadata.url;

  return {
    title: pageTitle,
    description,
    keywords,
    openGraph: {
      ...openGraphDefaults,
      url: canonicalUrl,
      title: pageTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...customMetadata,
  };
}

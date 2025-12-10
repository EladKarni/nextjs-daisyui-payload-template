import { Metadata } from "next";

export function metadataConstructor({
  title = "Acme Corporation",
  description = "Acme Corporation is here to help you achieve your business goals",
  image = "url-preview-image.png",
  icons = "/favicon/favicon.ico",
  noIndex = false,
  customMetadata = {},
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  customMetadata?: Partial<Metadata>;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...customMetadata, // Merge custom metadata with default metadata
  };
}

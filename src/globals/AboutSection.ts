import type { GlobalConfig } from "payload";

export const AboutSection: GlobalConfig = {
  slug: "about-section",
  label: "About Section",
  admin: {
    description: "Manage the about section on the homepage",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        return `${baseUrl}/api/preview?url=/&secret=${process.env.PAYLOAD_SECRET}`;
      },
    },
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
      defaultValue: "About Us",
      admin: {
        description: "Small text above the main title",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      defaultValue: "Your Trusted Business Partner",
      admin: {
        description: "Main heading for the about section",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      defaultValue:
        "At Acme Corporation, we specialize in delivering comprehensive business solutions that drive success. Our team of experienced professionals combines industry expertise with innovative approaches to help your business thrive in today's competitive landscape.",
      admin: {
        description: "Main description text",
      },
    },
    {
      name: "image",
      type: "upload",
      label: "Image",
      relationTo: "media",
      required: false,
      admin: {
        description: "Image displayed in the about section",
      },
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
      required: false,
      admin: {
        description: "Alternative text for the image (for accessibility)",
      },
    },
    {
      name: "imagePosition",
      type: "select",
      label: "Image Position",
      defaultValue: "right",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      admin: {
        description: "Position of the image relative to the text",
      },
    },
    {
      name: "stats",
      type: "array",
      label: "Statistics",
      required: false,
      fields: [
        {
          name: "value",
          type: "text",
          label: "Value",
          required: true,
          admin: {
            description: 'Stat value (e.g., "150+", "40+")',
          },
        },
        {
          name: "label",
          type: "text",
          label: "Label",
          required: true,
          admin: {
            description: 'Stat label (e.g., "Prototypes Delivered")',
          },
        },
      ],
      defaultValue: [
        { value: "500+", label: "Projects Completed" },
        { value: "200+", label: "Happy Clients" },
        { value: "15+", label: "Years Experience" },
      ],
      admin: {
        description: "Key statistics to display",
      },
    },
    {
      name: "cta",
      type: "group",
      label: "Call to Action",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Button Text",
          required: false,
        },
        {
          name: "href",
          type: "text",
          label: "Button Link",
          required: false,
          admin: {
            description: 'URL or anchor (e.g., "#process", "/contact")',
          },
        },
      ],
      admin: {
        description: "Optional call-to-action button",
      },
    },
  ],
};

import type { GlobalConfig } from "payload";

export const ProcessSection: GlobalConfig = {
  slug: "process-section",
  label: "Process Section",
  admin: {
    description: "Manage the process/workflow section on the homepage",
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
    update: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
      defaultValue: "How We Work",
      admin: {
        description: "Small text above the main title",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      defaultValue: "Our Process",
      admin: {
        description: "Main heading for the process section",
      },
    },
    {
      name: "steps",
      type: "array",
      label: "Process Steps",
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: "number",
          type: "text",
          label: "Step Number",
          required: true,
          admin: {
            description: 'Step number to display (e.g., "01", "02")',
          },
        },
        {
          name: "icon",
          type: "select",
          label: "Icon",
          required: true,
          options: [
            { label: "Lightbulb (Concept)", value: "lightbulb" },
            { label: "Design Tools (Design)", value: "design" },
            { label: "Flask (Prototyping)", value: "flask" },
            { label: "Shield Check (Production)", value: "shield" },
            { label: "Cog (Settings)", value: "cog" },
            { label: "Rocket (Launch)", value: "rocket" },
          ],
          defaultValue: "lightbulb",
          admin: {
            description: "Icon to display for this step",
          },
        },
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          admin: {
            description: "Title of the process step",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
          admin: {
            description: "Description of what happens in this step",
          },
        },
      ],
      admin: {
        description: "List of steps in your process",
      },
    },
  ],
};

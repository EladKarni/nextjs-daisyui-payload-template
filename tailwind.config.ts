import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cinnamon-wood": {
          "50": "#f8f0ed",
          "100": "#f0e1db",
          "200": "#e1c2b7",
          "300": "#d3a492",
          "400": "#c4856e",
          "500": "#b5674a",
          "600": "#91523b",
          "700": "#6d3e2c",
          "800": "#48291e",
          "900": "#24150f",
          "950": "#190e0a"
        },
        "dust-grey": {
          "50": "#f4f2f0",
          "100": "#e9e6e2",
          "200": "#d4ccc4",
          "300": "#beb3a7",
          "400": "#a8998a",
          "500": "#93806c",
          "600": "#756657",
          "700": "#584d41",
          "800": "#3b332b",
          "900": "#1d1a16",
          "950": "#15120f"
        },
        "parchment": {
          "50": "#f5f2f0",
          "100": "#ebe5e0",
          "200": "#d7cbc1",
          "300": "#c3b1a2",
          "400": "#ae9784",
          "500": "#9a7d65",
          "600": "#7b6451",
          "700": "#5d4b3c",
          "800": "#3e3228",
          "900": "#1f1914",
          "950": "#16110e"
        },
        "deep-mocha": {
          "50": "#f4f2f0",
          "100": "#eae4e1",
          "200": "#d4cac4",
          "300": "#bfafa6",
          "400": "#a99489",
          "500": "#94796b",
          "600": "#766156",
          "700": "#594940",
          "800": "#3b312b",
          "900": "#1e1815",
          "950": "#15110f"
        }
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#b5674a",           // cinnamon-wood-500
          "primary-content": "#ffffff",
          secondary: "#93806c",         // dust-grey-500
          "secondary-content": "#ffffff",
          accent: "#9a7d65",            // parchment-500
          "accent-content": "#ffffff",
          neutral: "#594940",           // deep-mocha-700
          "neutral-content": "#ffffff",
          "base-100": "#f5f2f0",        // parchment-50
          "base-200": "#ebe5e0",        // parchment-100
          "base-300": "#d7cbc1",        // parchment-200
          "base-content": "#1e1815",    // deep-mocha-900
          info: "#93806c",
          "info-content": "#ffffff",
          success: "#9a7d65",
          "success-content": "#ffffff",
          warning: "#c4856e",
          "warning-content": "#ffffff",
          error: "#91523b",
          "error-content": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#c4856e",           // cinnamon-wood-400
          "primary-content": "#190e0a", // cinnamon-wood-950
          secondary: "#a8998a",         // dust-grey-400
          "secondary-content": "#15120f", // dust-grey-950
          accent: "#ae9784",            // parchment-400
          "accent-content": "#16110e",  // parchment-950
          neutral: "#d7cbc1",           // parchment-200
          "neutral-content": "#1e1815", // deep-mocha-900
          "base-100": "#1e1815",        // deep-mocha-900
          "base-200": "#3b312b",        // deep-mocha-800
          "base-300": "#594940",        // deep-mocha-700
          "base-content": "#ebe5e0",    // parchment-100
          info: "#a8998a",
          "info-content": "#15120f",
          success: "#ae9784",
          "success-content": "#16110e",
          warning: "#d3a492",
          "warning-content": "#190e0a",
          error: "#b5674a",
          "error-content": "#f8f0ed",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

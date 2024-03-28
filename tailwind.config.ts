import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",
          secondary: "#6b7280",
          accent: "#86EFAC",
          neutral: "#e5e7eb",
          "base-100": "#ffffff",
          info: "#22d3ee",
          success: "#4ade80",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

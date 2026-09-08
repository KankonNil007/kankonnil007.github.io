import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#060911",
        surface: {
          DEFAULT: "#0b1120",
          card: "rgba(15, 23, 42, 0.65)",
          cardHover: "rgba(22, 34, 60, 0.8)",
          border: "rgba(148, 163, 184, 0.12)",
          borderHover: "rgba(6, 182, 212, 0.4)",
        },
        accent: {
          cyan: "#06b6d4",
          cyanLight: "#38bdf8",
          cyanGlow: "rgba(6, 182, 212, 0.15)",
          emerald: "#10b981",
          emeraldGlow: "rgba(16, 185, 129, 0.15)",
          indigo: "#6366f1",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% -20%, rgba(6, 182, 212, 0.15), transparent 70%)",
        "mesh-pattern": "radial-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "score-text": "hsl(214, 47%, 23%)",
        "dark-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(229, 64%, 46%)",
      },
      backgroundImage: {
        "scissors-gradient":
          "linear-gradient( to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "linear-gradient( to bottom, hsl(230, 89%, 62%),  hsl(230, 89%, 65%))",
        "rock-gradient":
          "linear-gradient( to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      },
      boxShadow: {
        "circle-shadow": "inset 0 2px 10px 3px rgba(0, 0, 0, 0.2);",
        "outside-shadow": "inset 0 -6px 5px 6px rgba(0, 0, 0, 0.4);",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /bg-scissors-gradient/ },
    { pattern: /bg-paper-gradient/ },
    { pattern: /bg-rock-gradient/ },
  ],
};
export default config;

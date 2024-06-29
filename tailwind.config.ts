import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "scissors-gradient":
          "radial-gradient(circle at center, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "radial-gradient(circle at center, hsl(230, 89%, 62%),  hsl(230, 89%, 65%))",
        "rock-gradient":
          "radial-gradient(circle at center, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      },
    },
  },
  plugins: [],
};
export default config;

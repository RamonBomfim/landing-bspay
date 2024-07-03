import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#00AA67",
          secondary: "#99EBCB",
        },
        gray: {
          black: "#1A1C1E",
          white: "#F4F4F7",
          border: "#626262",
          text: "#343537",
        },
        blue: {
          text: "#1B2632",
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center bottom, rgba(0,205,125,1) 0%, rgba(0,0,0,1) 50%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(180deg, #F4F4F7 0%, #00CC7C66 100%)",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        poppins: ["var(--font-poppins)"],
        ibmPlex: ["var(--font-ibm)"],
        franklin: ["var(--font-franklin)"],
      },
    },
  },
  plugins: [],
};
export default config;

import theme from "./src/assets/theme/colors.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#595959",
        secondary: "#7F7F7F",
        tertiary: "#CCCCCC",
        base: "#F2F2F2",
        primary_transparent: "rgba(89, 89, 89, 0.5)",
        secondary_transparent: "rgba(127, 127, 127, 0.5)",
        tertiary_transparent: "rgba(204, 204, 204, 0.5)",
        base_transparent: "rgba(242, 242, 242, 0.5)",
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "1020px" },
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /bg-./ }],
};

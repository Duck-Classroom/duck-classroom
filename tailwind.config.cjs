/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itim: ['var(--itim-font)', ...fontFamily.serif],
      },
      screens: {
        '3xl': '1920px',
      },
      spacing: {
        '1/2x': '0.625rem', // 10 px
        '1x': '1.25rem', // 20 px
        '2x': '2.5rem', // 40 px
        '3x': '3.75rem', // 60 px
        '4x': '5rem', // 80 px
        '5x': '6.25rem', // 100 px
        '6x': '7.5rem', // 120 px
        '7x': '8.75rem', // 140 px
        '8x': '10rem', // 160 px
        '9x': '11.25rem', // 180 px
        '10x': '12.5rem', // 200 px
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#fcab5e",
          "secondary": "#fff0e1",
          "accent": "#000000",
          "neutral": "#202020",
          "base-300": "#969696",
          "base-200": "#cac9ca",
          "base-100": "#fcfcfc",
          "info": "#bae6fd",
          "success": "#a7f3d0",
          "warning": "#fef08a",
          "error": "#fecaca",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        dark: {
          "primary": "#fcab5e",
          "secondary": "#fff0e1",
          "accent": "#ffffff",
          "neutral": "#fcfcfc",
          "base-300": "#303030",
          "base-200": "#282828",
          "base-100": "#202020",
          "info": "#bae6fd",
          "success": "#a7f3d0",
          "warning": "#fef08a",
          "error": "#fecaca",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};

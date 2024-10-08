/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    // Or if using `src` directory:
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      base: {
        0: 'rgb(255, 255, 255)',
        50: 'rgb(245, 245, 245)',
        100: 'rgb(235, 235, 235)',
        150: 'rgb(221, 221, 221)',
        200: 'rgb(208, 208, 208)',
        250: 'rgb(195, 195, 195)',
        300: 'rgb(181, 181, 181)',
        350: 'rgb(168, 168, 168)',
        400: 'rgb(154, 154, 154)',
        450: 'rgb(141, 141, 141)',
        500: 'rgb(128, 128, 128)',
        550: 'rgb(114, 114, 114)',
        600: 'rgb(101, 101, 101)',
        650: 'rgb(87, 87, 87)',
        700: 'rgb(74, 74, 74)',
        750: 'rgb(60, 60, 60)',
        800: 'rgb(47, 47, 47)',
        850: 'rgb(34, 34, 34)',
        900: 'rgb(20, 20, 20)',
        950: 'rgb(7, 7, 7)',
        1000: 'rgb(0, 0, 0)',
      },
      success: {
        50: 'rgb(247, 255, 251)',
        100: 'rgb(240, 255, 247)',
        150: 'rgb(232, 255, 243)',
        200: 'rgb(224, 255, 239)',
        250: 'rgb(217, 255, 235)',
        300: 'rgb(209, 255, 230)',
        350: 'rgb(201, 255, 226)',
        400: 'rgb(193, 255, 222)',
        450: 'rgb(186, 255, 218)',
        500: 'rgb(178, 255, 214)',
        550: 'rgb(160, 230, 193)',
        600: 'rgb(142, 204, 171)',
        650: 'rgb(125, 179, 150)',
        700: 'rgb(107, 153, 128)',
        750: 'rgb(89, 128, 107)',
        800: 'rgb(71, 102, 86)',
        850: 'rgb(53, 77, 64)',
        900: 'rgb(36, 51, 43)',
        950: 'rgb(18, 25, 21)',
      },
      warning: {
        50: 'rgb(255, 255, 246)',
        100: 'rgb(255, 255, 237)',
        150: 'rgb(254, 255, 228)',
        200: 'rgb(254, 255, 219)',
        250: 'rgb(254, 255, 210)',
        300: 'rgb(254, 255, 200)',
        350: 'rgb(254, 255, 191)',
        400: 'rgb(253, 255, 182)',
        450: 'rgb(253, 255, 173)',
        500: 'rgb(253, 255, 164)',
        550: 'rgb(228, 230, 148)',
        600: 'rgb(202, 204, 131)',
        650: 'rgb(177, 179, 115)',
        700: 'rgb(152, 153, 98)',
        750: 'rgb(127, 128, 82)',
        800: 'rgb(101, 102, 66)',
        850: 'rgb(76, 77, 49)',
        900: 'rgb(51, 51, 33)',
        950: 'rgb(25, 25, 16)',
      },
      error: {
        50: 'rgb(255, 241, 241)',
        100: 'rgb(255, 226, 228)',
        150: 'rgb(255, 212, 214)',
        200: 'rgb(255, 197, 200)',
        250: 'rgb(255, 183, 187)',
        300: 'rgb(255, 169, 173)',
        350: 'rgb(255, 154, 159)',
        400: 'rgb(255, 140, 145)',
        450: 'rgb(255, 125, 132)',
        500: 'rgb(255, 111, 118)',
        550: 'rgb(230, 100, 106)',
        600: 'rgb(204, 89, 94)',
        650: 'rgb(179, 78, 83)',
        700: 'rgb(153, 67, 71)',
        750: 'rgb(128, 56, 59)',
        800: 'rgb(102, 44, 47)',
        850: 'rgb(77, 33, 35)',
        900: 'rgb(51, 22, 24)',
        950: 'rgb(25, 11, 12)',
      },
    },
  },
  plugins: [],
}

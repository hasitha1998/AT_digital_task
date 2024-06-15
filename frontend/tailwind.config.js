export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B3CC9', // Specify your custom primary color
        },
        secondary: {
          DEFAULT: '#f28d35',
        },
        Analogous_color_1: {
          DEFAULT: '#6A44F2',
        },
        Analogous_color_2: {
          DEFAULT: '#1CBDDD',
        },
        Triadic_color_1: {
          DEFAULT: '#52378C',
        },
        Dark_color: {
          DEFAULT: 'linear-gradient(to right, #78BF91, #4DCA79)',
        },
        Text_color: {
          DEFAULT: '#2F2F2F', 
        },
        Text_color_light: {
          DEFAULT: '#545A75',
        },
        Text_color_subtle: {
          DEFAULT: '#9C9991',
        },
        Accent_color_blue: {
          DEFAULT: '#E2F2FE',
        },
        Accent_color_pink: {
          DEFAULT: '#FFF8E0',
        },
        Error_color: {
          DEFAULT: '#FF0335',
        },
        Success_color: {
          DEFAULT: '#5EB30B',
        },

      },
    },
  },
  plugins: [],
}

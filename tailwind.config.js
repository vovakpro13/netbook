module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
    "./blocks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1025px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        blue: {
          500: "#E5F0FD",
          400: "rgba(33,123,244,0.06)",
          300: "#217BF4",
          200: "rgba(33,123,244,0.5)",
          100: "rgba(33,123,244,0.1)",
        },
        gray: {
          100: "rgba(33,123,244,0.1)",
          200: "#C4C4C4",
          300: "#171648",
          400: "#656464",
          500: "#2B2B39",
          600: "#0a093d",
          700: "#5D5B70",
          800: "#8C8C8C",
          900: "#4A4A56",
          title: "#2F2C4A",
          border: "rgba(243, 243, 243, 0.5)",
        },
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },

      transitionProperty: {
        width: "width",
        boxShadow: "box-shadow",
        transform: "transform",
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },

      boxShadow: {
        card: "0px 26px 49px rgba(146, 165, 184, 0.14)",
        featureCard: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
        tab: "0px 7px 22px -6px rgba(0, 72, 168, 0.34)",
        memberCard: "0px 34px 68px rgba(116, 115, 128, 0.1)",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};

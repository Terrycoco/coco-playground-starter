//theme.js
const _default = {
  fonts: {
    base: "Gelasio",

    display: "Gelasio",

    special: "Oleo Script",

    mono: "Space Mono",
  },

  fontSizes: {
    mobile: {
      body: {
        fontSize: "18",

        lineHeight: "1.5",
      },

      fs1: {
        fontSize: "25",

        lineHeight: "1.16",
      },

      fs2: {
        fontSize: "40",

        lineHeight: "1.16",
      },
    },

    tablet: {
      body: {
        fontSize: "19",

        lineHeight: "1.5",
      },

      fs1: {
        fontSize: "25",

        lineHeight: "1.16",
      },

      fs2: {
        fontSize: "40",

        lineHeight: "1.16",
      },
    },

    laptop: {
      body: {
        fontSize: "20",

        lineHeight: "1.5",
      },

      fs1: {
        fontSize: "40",

        lineHeight: "1.16",
      },

      fs2: {
        fontSize: "52",

        lineHeight: "1.16",
      },
    },

    desktop: {
      body: {
        fontSize: "24",

        lineHeight: "1.345",
      },

      fs1: {
        fontSize: "25",

        lineHeight: "1.16",
      },

      fs2: {
        fontSize: "53",

        lineHeight: "1.16",
      },
    },

    tv: {
      body: {
        fontSize: "28",

        lineHeight: "1.391",
      },

      fs1: {
        fontSize: "37",

        lineHeight: "1.16",
      },

      fs2: {
        fontSize: "67",

        lineHeight: "1.031",
      },
    },
  },

  screens: {
    mobile: {
      min: "320px",

      max: "479px",
    },

    tablet: {
      min: "480px",

      max: "767px",
    },

    laptop: {
      min: "768px",

      max: "1023px",
    },

    desktop: {
      min: "1024ox",

      max: "1999px",
    },

    tv: {
      min: "1200px",

      max: "9999px",
    },
  },

  colors: {
    primary: "#fc3a79",

    secondary: "#fe572e",

    blackish: "#261f22",

    whitish: "#f5f5f4",

    error: "#dc2626",
  },

  colorVariants: {
    primary75: "#fd6b99",

    primary50: "#fe9dbb",

    primary25: "#fecedd",

    primary10: "#ffebf1",

    primary5: "#fff5f8",

    secondary75: "#fe8162",

    secondary50: "#feab96",

    secondary25: "#ffd5cb",

    secondary10: "#ffeeea",

    secondary5: "#fff7f5",

    blackish75: "#635158",

    blackish50: "#9c868f",

    blackish25: "#cdc2c7",

    blackish10: "#ebe7e9",

    blackish5: "#f5f3f4",
  },

  text: {
    p: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-body)",

      fontWeight: "400",

      fontSize: "var(--fs-p)",

      lineHeight: "var(--lh-base)",

      fontVariationSettings: "wght 400",

      letterSpacing: "0",

      wordSpacing: "0",

      maxWidth: "60ch",
    },

    h1: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "var(--fs-h1)",

      lineHeight: "115%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    h2: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "var(--fs-h2)",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    h3: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "var(--fs-h3)",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    h4: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "1rem",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    h5: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "1rem",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    h6: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-display)",

      fontWeight: "400",

      fontSize: "var(--fs-p1)",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    small: {
      color: "var(--clr-blackish)",

      fontFamily: "var(--font-body)",

      fontWeight: "400",

      fontSize: "var(--fs-small)",

      lineHeight: "150%",

      fontVariationSettings: "wght 400",

      letterSpacing: "-1.5px",

      wordSpacing: "-5px",
    },

    subtitle1: {
      color: "#261f22",

      fontFamily: "var(--font-display)",

      fontSize: "1.6rem",

      fontWeight: "normal",

      lineHeight: "1.4",

      letterSpacing: ".15px",
    },

    subtitle2: {
      color: "#261f22",

      fontFamily: "var(--font-display)",

      fontSize: "1.4rem",

      fontWeight: "medium",

      lineHeight: "1.4",

      letterSpacing: ".1px",
    },
  },

  spacing: {},

  elements: {
    section: {
      padding: "var(--sp-section-padding)",
    },

    nav: {
      fontSize: "var(--fs-nav-link)",
    },
  },

  layout: {
    section: {
      backgroundColor: "#f5f5f4",
    },
  },
};

module.exports = _default;

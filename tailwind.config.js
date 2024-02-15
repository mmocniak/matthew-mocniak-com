const colors = require("tailwindcss/colors");
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ["./pages/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
            },
            dropShadow: {
                btn: "0px 1px 0px rgba(0, 0, 0, 0.05)",
                inner: "inset 0px 2px 0px rgba(0, 0, 0, 0.1), inset 0px 3px 0px rgba(0, 0, 0, 0.055)",
            },
            backgroundImage: (theme) => ({
                signature: "url('/signature.png')",
                "footer-texture": "url('/img/footer-texture.png')",
                "custom-gradient":
                    "linear-gradient(180deg, #4B72B4 0%, #4A71B3 11.79%, #4970B1 21.38%, #476DAD 29.12%, #456AA8 35.34%, #4266A2 40.37%, #3E619C 44.56%, #3B5C95 48.24%, #37568D 51.76%, #325185 55.44%, #2E4B7C 59.63%, #2A4574 64.66%, #263F6C 70.88%, #213964 78.62%, #1E345C 88.21%, #1A2F55 100%)",
            }),
            backgroundSize: {
                12: "3rem",
                20: "5rem",
                "3/5": "60%",
            },
        },
        // fontFamily: {
        //   'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        //  }
    },

    variants: {
        extend: {
            fontFamily: ["hover", "focus"],
            backgroundColor: ["active"],
            textColor: ["active"],
            textDecoration: ["first"],
            boxShadow: ["active"],
        },
    },
    plugins: [],
};

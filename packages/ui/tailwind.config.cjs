import {colors} from "zro-tokens";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./lib/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                secondary: colors.secondary,
                'base-100': colors.base100,
                'base-200': colors.base200,
                'base-300': colors.base300,
                'base-400': colors.base400,
                'base-500': colors.base500,
                'base-600': colors.base600,
                'content-primary': colors.contentPrimary,
                'content-secondary': colors.contentSecondary,
                'blue-light': colors.blueLight,
                'blue-medium': colors.blueMedium,
                'blue-dark': colors.blueDark,
                link: colors.link,
                success: colors.success,
                error: colors.error,
                warning: colors.warning,
                info: colors.info,
            },
        },
    },
    plugins: [],
}

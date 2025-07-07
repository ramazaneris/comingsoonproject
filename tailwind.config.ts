// tailwind.config.js
import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // ...
        // make sure it's pointing to the ROOT node_module

        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "media",
    plugins: [heroui()],
};

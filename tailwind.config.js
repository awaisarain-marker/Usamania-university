/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-red': '#A6192E',
                'primary-blue': '#002F6C',
                'accent-blue': '#00B5E2',
                'light-gray': '#f5f5f5',
            },
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'],
                serif: ['var(--font-dm-serif)', 'serif'],
            },
        },
    },
    plugins: [],
}

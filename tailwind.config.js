/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif']
            },
            colors: {
                'section-color':'#ececec',
            },
        },
    },
    plugins: [],
}
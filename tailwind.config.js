module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4da6ff',
                    DEFAULT: '#0B84FF',
                    dark: '#0066cc',
                },
                secondary: {
                    light: '#f39e58',
                    DEFAULT: '#ed7410',
                    dark: '#bf5d0d',
                },
                'pink-light': '#eca7a7',
                'pink-dark': '#ed8179',
                'beige-light': '#fff6e5'
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

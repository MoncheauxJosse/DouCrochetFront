module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            'xs': {'min': '320px', 'max': '767px'},
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          },
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
                'light-pink': '#eca7a7',
                'dark-pink': '#ed8179',
                'light-yellow': '#fff5e4',
                'light-yellow-hover': '#FAD89E'
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

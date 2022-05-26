module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        // fontFamily: {
        //     sans: 'Nunito',
        // },
        extend: {
            animation: {
                wave: 'wave-keyframe 2.5s ease-in-out 2s infinite',
            },
            keyframes: {
                'wave-keyframe': {
                    '0%': { transform: 'rotate( 0.0deg)' },
                    '10%': { transform: 'rotate(14.0deg)' },
                    '20%': { transform: 'rotate(-8.0deg)' },
                    '30%': { transform: 'rotate(14.0deg)' },
                    '40%': { transform: 'rotate(-4.0deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate( 0.0deg)' },
                    '100%': { transform: 'rotate( 0.0deg)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

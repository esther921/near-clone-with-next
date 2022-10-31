/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gradient-violet': '#9092fb',
        'gradient-blue': '#86b5ef',
        'gradient-green' : '#7bdde2',
        'bg-violet' : '#8e9af9',
        'secondary': ' #676767',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient( 50% 50% at 50% 50%,var(--tw-gradient-stops))',
      },
      width: {
          '82': '22rem',
      }
    },
    plugins: [],
  },
}

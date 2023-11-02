/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // cores de texto
        'gray-1': '#FAFAFA',
        'gray-2': '#F0F0F0',
        'gray-3': '#EBEBEB',
        'gray-4': '#DBDBDB',
        'gray-5': '#DBDBDB',
        'gray-6': '#B8B8B8',
        'gray-7': '#A3A3A3',
        'gray-8': '#8F8F8F',
        'gray-9': '#7A7A7A',
        'gray-10': '#666666',
        'gray-11': '#525252',
        'gray-12': '#3D3D3D',
        'gray-13': '#292929',
        'gray-14': '#141414',

        // cores de ênfase

        'blue-1': '#EDF3FF',
        'blue-2': '#D1DFFF',
        'blue-3': '#B0C5FF',
        'blue-4': '#8CA9F9',
        'blue-5': '#6B8CE8',
        'blue-6': '#6179DC',
        'blue-7': '#5169CB',
        'blue-8': '#3D55B8',
        'blue-9': '#2F48AD',
        'blue-10': '#1B3497',
        'blue-11': '#0C227E',
        'blue-12': '#051863',
        'blue-13': '#00104E',
        'blue-14': '#000A3F',
        'blue-15': '#000832',
        'blue-16': '#00051D',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },

    },
  },
  plugins: [],
}


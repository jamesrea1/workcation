module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./dist/*.html']
  },
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
        "2xl": '2rem'
      },
      spacing:{
        '72' : '18rem',
        '80' : '20rem'
      },
      padding:{
        '5/6': '83.3333333%'
      }
  
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
    borderColor: ['responsive', 'hover', 'focus', 'checked'],
    borderWidth: ['responsive', 'checked'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}

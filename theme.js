import { createTheme } from 'pss'

const theme = createTheme({
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 16, 32, 64, 128 ],
    M: [ 0, 8, 16, 32, 64 ]
  },
  size: {
    site: '1300px'
  },
  palette: {
    default: {
      bg: '#ffffff',
      fg: '#191919'
    },
    inverted: {
      bg: '#191919',
      fg: '#ffffff'
    }
  }
})

export default theme

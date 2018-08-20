import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import {
  hydrate,
  injectGlobal
} from 'react-emotion'
import theme from '../theme'
import Box from '../components/box'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body, #__next {
    min-height: 100%;
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <Box pd={1} ht>
      <Box
        mgx='auto'
        tm='inverted'
        maxWd='site'
        ht
      >
        hey!
      </Box>
    </Box>
  </ThemeProvider>
)

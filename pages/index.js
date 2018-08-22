import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import {
  hydrate,
  injectGlobal
} from 'react-emotion'
import theme from '../theme'
import Box from '../components/box'
import FlexBox from '../components/flexbox'
import Intro from '../components/intro'

import {
  NO_LINES,
  NO_TEXTS,
  NO_ARCHES
} from '../components/consts'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body, #__next {
    height: 100%;
  }
  html {
    background-color: ${theme.color.blue}
  }
`

injectGlobal`
  @font-face {
    fontFamily: 'Fugue-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: 'url(/static/fonts/fugue/Fugue-Regular.woff)'
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <Box ht tm>
      <FlexBox
        mgx='auto'
        maxWd='site'
        align='center'
        justify='space-around'
        wrap='wrap'
        ht
      >
        <Intro />
        <Intro types={NO_TEXTS} isSquared />
        <Intro types={NO_LINES} />
        <Intro types={NO_ARCHES} />
      </FlexBox>
    </Box>
  </ThemeProvider>
)

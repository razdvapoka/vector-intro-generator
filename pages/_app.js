import App, { Container } from 'next/app'
import { hydrate, injectGlobal } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import Box from '../components/box'

injectGlobal`
  html, body, #__next {
    height: 100%;
  }

  html {
    background-color: ${theme.color.blue};
  }

  @font-face {
    fontFamily: 'Fugue-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: 'url(/static/fonts/fugue/Fugue-Regular.woff)'
  }
`

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  console.log('HYDRATE!')
  hydrate(window.__NEXT_DATA__.ids)
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Box ht tm>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Box>
      </ThemeProvider>
    )
  }
}

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import storeWrapper from '../store'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      // Remove the server-side injected CSS.
      // eslint-disable-next-line no-undef
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles)
      }
    }, [])
  
    return (
      <>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CssBaseline>
      </>
    )
  }

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

MyApp.defaultProps = {
  Component: () => <div />,
  pageProps: {},
}

export default storeWrapper.withRedux(MyApp)

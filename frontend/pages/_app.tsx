import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as Theme from '../theme'

/* common css */
import '../styles/base.css'

/* libs, const, config */
import { mediaPc } from 'lib/media-query'

const GlobalStyle = createGlobalStyle`
  .pc {
    display: none;
    ${mediaPc`
      display: block;
    `}
  }
  .sp {
    display: block;
    ${mediaPc`
      display: none;
    `}
  }
`

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme.theme}>
      <GlobalStyle theme={Theme.theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

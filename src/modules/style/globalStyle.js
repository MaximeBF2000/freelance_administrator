import { createGlobalStyle } from 'styled-components'
import { fromTheme } from './fromTheme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  main {
    padding: 1rem;
    padding-left: calc(${fromTheme('dom.drawer.width')[0]}px + 1rem);
  }
`

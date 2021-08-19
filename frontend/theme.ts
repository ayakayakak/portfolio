import 'styled-components'

export const theme = {
  black: '#333',
  white: '#fff',
  backgroundGray: '#f7f7f7',
  borderGray: '#ccc',
  placeholderGray: '#ccc',
  error: '#eb5757',
  success: '#24be98',
  error: '#e34b4d',
} as const

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

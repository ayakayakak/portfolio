import 'styled-components'

export const theme = {
  black: '#333',
  background: '#f7f7f7'
} as const

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

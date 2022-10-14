import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string

      purple: string

      white: string
      gray0: string
      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray750: string
      gray800: string
      gray900: string
      black: string
    }
  }
}

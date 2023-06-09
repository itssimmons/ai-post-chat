import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      card: string
      text: string
      gray: string
      vectors: string
      shadow: string
      button: {
        bg: string
        fg: string
      }
      input: {
        bg: string
        fg: string
      }
      chat: {
        layout: {
          session: string
          server: string
        }
        message: {
          session: string
          server: string
        }
        time: {
          session: string
          server: string
          img: string
        }
        prompt: string
      }
    }
    font: string[]
    fontSize: number
  }
}

import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components/native'

import useConfig from '#/hooks/useConfig'
import darkenHexColor from '#/helpers/darkenHexColor'

export default ({ children }: any) => {
  const { config } = useConfig()

  const theme = useMemo(
    () => ({
      colors: {
        primary: config.contrastColor,
        background: config.darkMode ? '#292931' : '#4B4D6B1F',
        card: config.darkMode ? '#363640' : '#FCFCFC',
        text: config.darkMode ? '#FCFCFC' : '#353535',
        gray: config.darkMode ? '#909090' : '#858585',
        vectors: config.darkMode ? '#606060' : '#D9D9D9',
        shadow: config.darkMode ? '#1E1E1E' : '#FFFFFF',
        button: {
          bg: config.darkMode
            ? `${config.contrastColor}d0`
            : `${config.contrastColor}51`,
          fg: config.darkMode
            ? '#FCFCFC'
            : darkenHexColor(config.contrastColor, 30)
        },
        input: {
          bg: config.darkMode ? '#44444A' : '#F2F1F4',
          fg: config.darkMode ? '#E4E2E6' : '#353535'
        },
        chat: {
          layout: {
            session: config.darkMode ? '#3E3E47' : '#F2F3F7',
            server: config.contrastColor
          },
          message: {
            session: config.darkMode ? '#FFFFFF' : '#5D5D5D',
            server: '#FFFFFF'
          },
          time: {
            session: config.darkMode ? '#E1DDDD' : '#5D5D5D',
            server: '#FFFFFF',
            img: '#FFFFFF'
          },
          prompt: config.darkMode ? '#40414B' : '#343541'
        }
      },
      font: ['sans-serif'],
      fontSize: config.fontSize
    }),
    [config.darkMode, config.contrastColor, config.fontSize]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

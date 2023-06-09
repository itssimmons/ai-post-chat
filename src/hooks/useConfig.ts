import { useContext, useEffect, useLayoutEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ConfigContext from '#/ctx/ConfigContext'
import { CONFIG_STORE_KEY } from '@env'

export default () => {
  const { config, dispatch } = useContext(ConfigContext)

  // useLayoutEffect(() => {
  //   ;(async () => {
  //     const payload = await preload()
  //     if (payload) dispatch({ type: 'PRELOAD', payload })
  //   })()
  // }, [])

  useEffect(() => {
    // ;(async () => await store(config))()
  }, [config])

  const setFontSize = (payload: number) => {
    dispatch({ type: 'SET_FONTSIZE', payload: { fontSize: payload } })
  }

  const setContrastColor = (payload: string) => {
    dispatch({ type: 'SET_CONTRASTCOLOR', payload: { contrastColor: payload } })
  }

  const toggleDarkMode = () => {
    dispatch({ type: 'SET_DARKMODE' })
  }

  const toggleNotification = () => {
    dispatch({ type: 'SET_NOTIFICATION' })
  }

  return {
    config,
    toggleNotification,
    toggleDarkMode,
    setContrastColor,
    setFontSize
  }
}

const store = async (state: any) => {
  try {
    const jsonValue = JSON.stringify(state)
    await AsyncStorage.setItem(CONFIG_STORE_KEY, jsonValue)
  } catch (e) {
    /** ignore errors */
  }
}

const preload = async () => await AsyncStorage.getItem(CONFIG_STORE_KEY)

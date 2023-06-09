import { useMemo, useReducer } from 'react'

import ConfigContext from '#/ctx/ConfigContext'
import ConfigReducer, {
  configInit,
  initialConfigState
} from '#/reducers/ConfigReducer'

export default ({ children }: any) => {
  const [state, dispatch] = useReducer(
    ConfigReducer,
    initialConfigState,
    configInit
  )

  const value = useMemo(
    () => ({
      config: state,
      dispatch
    }),
    [state, dispatch]
  )

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  )
}

import { useMemo, useReducer } from 'react'

import SessionContext from '#/ctx/SessionContext'
import SessionReducer, {
  initialSessionState,
  sessionInit
} from '#/reducers/SessionReducer'

export default ({ children }: any) => {
  const [state, dispatch] = useReducer(
    SessionReducer,
    initialSessionState,
    sessionInit
  )

  const value = useMemo(
    () => ({
      session: state,
      dispatch
    }),
    [state, dispatch]
  )

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

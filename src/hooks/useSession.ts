import SessionContext from '#/ctx/SessionContext'
import { useContext } from 'react'

export default () => {
  const { session, dispatch } = useContext(SessionContext)

  const updateSession = (payload: SessionPayload) => {
    dispatch({ type: 'UPDATE_SESSION', payload })
  }

  return {
    session,
    updateSession
  }
}
